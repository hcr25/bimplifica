import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/hooks/useLanguage";
import { supabase } from "@/integrations/supabase/client";
const ContactSection = () => {
  const {
    t
  } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validatePhone = (phone: string) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phone === '' || phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;

    // Basic input sanitization - remove potentially dangerous script tags
    const sanitizedValue = value.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Client-side validation
    if (!validateEmail(formData.email)) {
      toast({
        title: "Error de validación",
        description: "Por favor ingresa un email válido.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }
    if (formData.phone && !validatePhone(formData.phone)) {
      toast({
        title: "Error de validación",
        description: "Por favor ingresa un número de teléfono válido.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }
    if (formData.message && formData.message.length > 1000) {
      toast({
        title: "Error de validación",
        description: "El mensaje no puede exceder 1000 caracteres.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }
    try {
      // Use secure edge function for server-side validation and rate limiting
      const {
        data,
        error
      } = await supabase.functions.invoke('submit-contact', {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          company: formData.company?.trim() || null,
          phone: formData.phone?.trim() || null,
          message: formData.message?.trim() || null
        }
      });
      if (error) {
        throw new Error(error.message || 'Failed to submit contact request');
      }

      // Success
      toast({
        title: t('contact.form.success.title'),
        description: t('contact.form.success.description')
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el formulario. Por favor inténtalo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="section-padding bg-primary my-0">
      <div className="container-custom px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Contact Information */}
          <div className="text-white my-0">
            
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-12 leading-relaxed">
              {t('contact.subtitle')}
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">{t('contact.info.email')}</p>
                  <a href="mailto:contacto@bimplifica.cl" className="text-white/80 hover:text-white transition-colors">
                    contacto@bimplifica.cl
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">{t('contact.info.phone')}</p>
                  <a href="https://wa.me/56982839611" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                    +56 9 82839611
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">{t('contact.info.location')}</p>
                  <p className="text-white/80">Santiago, Chile</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">{t('contact.info.website')}</p>
                  <a href="https://www.bimplifica.cl" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                    www.bimplifica.cl
                  </a>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
              <h3 className="text-xl font-bold mb-4 text-white">{t('contact.benefits.title')}</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-white/90">{t('contact.benefits.plan')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-white/90">{t('contact.benefits.consultation')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl my-0">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {t('contact.form.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('contact.form.subtitle')}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    {t('contact.form.name')}
                  </label>
                  <Input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder={t('contact.form.name.placeholder')} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    {t('contact.form.email')}
                  </label>
                  <Input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder={t('contact.form.email.placeholder')} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    {t('contact.form.company')}
                  </label>
                  <Input type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder={t('contact.form.company.placeholder')} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    {t('contact.form.phone')}
                  </label>
                  <Input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder={t('contact.form.phone.placeholder')} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  {t('contact.form.message')}
                </label>
                <Textarea name="message" value={formData.message} onChange={handleInputChange} placeholder={t('contact.form.message.placeholder')} rows={4} />
              </div>

              <Button type="submit" variant="accent" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? t('contact.form.sending') : <>
                    {t('contact.form.submit')}
                    <Send className="ml-2 h-5 w-5" />
                  </>}
              </Button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-6">
              {t('contact.form.privacy')}
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;