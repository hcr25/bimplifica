import { Mail, Globe, MapPin, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-3xl font-bold">IMPLIFICA</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed max-w-md">
              Transforming the construction industry through digital innovation 
              and technical precision in every project.
            </p>
            <div className="text-sm text-white/60">
              <p className="mb-2">
                Specializing in BIM modeling, quantity take-offs, and AWP methodology 
                for construction excellence.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-white/80">contacto@bimplifica.cl</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-accent" />
                <span className="text-white/80">www.bimplifica.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-white/80">Santiago, Chile</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <div className="space-y-3">
              <div className="text-white/80 hover:text-white transition-colors cursor-pointer">
                Quantity Take-offs
              </div>
              <div className="text-white/80 hover:text-white transition-colors cursor-pointer">
                BIM Modeling
              </div>
              <div className="text-white/80 hover:text-white transition-colors cursor-pointer">
                AWP Consulting
              </div>
              <div className="text-white/80 hover:text-white transition-colors cursor-pointer">
                Tech Solutions
              </div>
              <div className="text-white/80 hover:text-white transition-colors cursor-pointer">
                Project Management
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © {currentYear} BIMPLIFICA. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="text-white/40 text-xs text-center mt-6">
            <p>
              Transforming construction through digital innovation and technical precision.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;