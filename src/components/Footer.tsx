import { Mail, Globe, MapPin, Phone, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
const Footer = () => {
  const {
    t
  } = useLanguage();
  const currentYear = new Date().getFullYear();
  return <footer className="bg-background border-t border-border text-foreground py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/lovable-uploads/f9e94f2a-0fda-468b-b11b-c62e2bc61336.png" alt="BIMPLIFICA Logo" className="h-14 w-auto" />
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              {t('footer.description')}
            </p>
            <div className="text-sm text-muted-foreground">
              <p className="mb-2">
                {t('footer.specialization')}
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.contact.title')}</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <a href="mailto:contacto@bimplifica.cl" className="text-muted-foreground hover:text-foreground transition-colors">
                  contacto@bimplifica.cl
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-accent" />
                <span className="text-muted-foreground">www.bimplifica.cl</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <a href="https://wa.me/56982839611" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  +56 9 82839611
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-muted-foreground">Santiago, Chile</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.services.title')}</h3>
            <div className="space-y-3">
              <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                {t('footer.services.takeoffs')}
              </div>
              <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                {t('footer.services.bim')}
              </div>
              <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                {t('footer.services.awp')}
              </div>
              <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                {t('footer.services.tech')}
              </div>
              <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                {t('footer.services.management')}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {currentYear} BIMPLIFICA. {t('footer.copyright')}
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              
            </div>
          </div>
          
          <div className="text-muted-foreground/60 text-xs text-center mt-6">
            <p>
              {t('footer.tagline')}
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;