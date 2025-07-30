import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // ScrollSpy functionality
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'bim', 'system', 'results', 'process', 'contact'];
    // Map sections to their corresponding nav items  
    const sectionToNavMap: Record<string, string> = {
      'home': 'home',
      'about': 'about', 
      'services': 'services',
      'bim': 'services', // BIM section maps to services nav
      'system': 'system',
      'results': 'results',
      'process': 'results', // Process section maps to results nav
      'contact': 'contact'
    };
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const visibleSections = entries
        .filter(entry => entry.isIntersecting)
        .map(entry => ({
          id: entry.target.getAttribute('data-section') || entry.target.id,
          top: entry.boundingClientRect.top
        }))
        .sort((a, b) => Math.abs(a.top) - Math.abs(b.top));

      if (visibleSections.length > 0) {
        const closestSection = visibleSections[0].id;
        const navSection = sectionToNavMap[closestSection] || closestSection;
        setActiveSection(navSection);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '-50px 0px -50% 0px' // Trigger when section is 50px below viewport
    });

    // Observe all sections
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/b6db53b9-6577-4866-bd9c-945cd6f8ffe2.png" 
              alt="BIMPLIFICA Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('system')}
              className={`nav-link ${activeSection === 'system' ? 'active' : ''}`}
            >
              {t('nav.platform')}
            </button>
            <button 
              onClick={() => scrollToSection('results')}
              className={`nav-link ${activeSection === 'results' ? 'active' : ''}`}
            >
              {t('nav.results')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
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
                className={`text-left nav-link-mobile ${activeSection === 'home' ? 'active' : ''}`}
              >
                {t('nav.home')}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`text-left nav-link-mobile ${activeSection === 'about' ? 'active' : ''}`}
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`text-left nav-link-mobile ${activeSection === 'services' ? 'active' : ''}`}
              >
                {t('nav.services')}
              </button>
              <button 
                onClick={() => scrollToSection('system')}
                className={`text-left nav-link-mobile ${activeSection === 'system' ? 'active' : ''}`}
              >
                {t('nav.platform')}
              </button>
              <button 
                onClick={() => scrollToSection('results')}
                className={`text-left nav-link-mobile ${activeSection === 'results' ? 'active' : ''}`}
              >
                {t('nav.results')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`text-left nav-link-mobile ${activeSection === 'contact' ? 'active' : ''}`}
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

            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;