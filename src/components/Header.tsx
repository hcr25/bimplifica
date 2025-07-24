import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/7fc33c99-1d53-40b3-89a7-36b722073c0d.png" 
              alt="BIMPLIFICA Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('system')}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              {t('nav.platform')}
            </button>
            <button 
              onClick={() => scrollToSection('results')}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              {t('nav.results')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              {t('nav.contact')}
            </button>
          </nav>

          {/* Language Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1 bg-muted rounded-lg p-1">
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 text-sm font-medium rounded transition-all ${
                  language === 'es' 
                    ? 'bg-white text-primary shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm font-medium rounded transition-all ${
                  language === 'en' 
                    ? 'bg-white text-primary shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="accent" 
              onClick={() => scrollToSection('contact')}
            >
              {t('nav.cta')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-accent transition-colors font-medium"
              >
                {t('nav.home')}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-accent transition-colors font-medium"
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground hover:text-accent transition-colors font-medium"
              >
                {t('nav.services')}
              </button>
              <button 
                onClick={() => scrollToSection('system')}
                className="text-left text-foreground hover:text-accent transition-colors font-medium"
              >
                {t('nav.platform')}
              </button>
              <button 
                onClick={() => scrollToSection('results')}
                className="text-left text-foreground hover:text-accent transition-colors font-medium"
              >
                {t('nav.results')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-accent transition-colors font-medium"
              >
                {t('nav.contact')}
              </button>
              
              {/* Mobile Language Toggle */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center space-x-1 bg-muted rounded-lg p-1 mb-4">
                  <button
                    onClick={() => setLanguage('es')}
                    className={`flex-1 px-3 py-2 text-sm font-medium rounded transition-all ${
                      language === 'es' 
                        ? 'bg-white text-primary shadow-sm' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Español
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`flex-1 px-3 py-2 text-sm font-medium rounded transition-all ${
                      language === 'en' 
                        ? 'bg-white text-primary shadow-sm' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              <Button 
                variant="accent" 
                className="w-full"
                onClick={() => scrollToSection('contact')}
              >
                {t('nav.cta')}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;