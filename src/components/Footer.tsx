import { Mail, Globe, MapPin, Phone, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
const Footer = () => {
  const {
    t
  } = useLanguage();
  const currentYear = new Date().getFullYear();
  return <footer className="bg-primary text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/lovable-uploads/1832ebc8-70ac-4323-b61d-1fbf64e29194.png" alt="BIMPLIFICA Logo" className="h-12 w-auto" />
            </div>
            <p className="text-white/80 mb-6 leading-relaxed max-w-md">
              {t('footer.description')}
            </p>
            <div className="text-sm text-white/60">
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
                <span className="text-white/80">contacto@bimplifica.cl</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-accent" />
                <span className="text-white/80">www.bimplifica.cl</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-white/80">+56 9 </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-white/80">Santiago, Chile</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.services.title')}</h3>
            <div className="space-y-3">
              <div className="text-white/80 hover:text-white transition-colors cursor-pointer">
                {t('footer.services.takeoffs')}
              </div>
              <div className="text-white/80 hover:text-white transition-colors cursor-pointer">
                {t('footer.services.bim')}
              </div>
              <div className="text-white/80 hover:text-white transition-colors cursor-pointer">
                {t('footer.services.awp')}
              </div>
              <div className="text-white/80 hover:text-white transition-colors cursor-pointer">
                {t('footer.services.tech')}
              </div>
              <div className="text-white/80 hover:text-white transition-colors cursor-pointer">
                {t('footer.services.management')}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © {currentYear} BIMPLIFICA. {t('footer.copyright')}
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="text-white/40 text-xs text-center mt-6">
            <p>
              {t('footer.tagline')}
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;