import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-construction-bim.jpg";
import { useLanguage } from "@/hooks/useLanguage";

const HeroSection = () => {
  const { t } = useLanguage();
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Minimal Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Construction site with BIM technology" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content - Typography Focused */}
      <div className="container-professional relative z-10 text-center text-white">
        <div className="max-w-5xl mx-auto">
          
          {/* Minimal Typography Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight mb-8 leading-[0.9]">
            <span className="block text-white font-extralight">{t('hero.title1')}</span>
            <span className="block text-white/90 text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-4 font-light">{t('hero.title2')}</span>
          </h1>

          {/* Clean Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl mb-16 text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
            {t('hero.subtitle')}
          </p>

          {/* Single Minimal CTA */}
          <div className="flex justify-center mb-20">
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="bg-transparent border-white/30 text-white hover:bg-white hover:text-primary px-12 py-4 text-base font-light tracking-wide transition-all duration-300"
            >
              {t('hero.cta1')}
            </Button>
          </div>

          {/* Minimal Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-extralight text-white mb-3">30%</div>
              <div className="text-white/60 text-sm lg:text-base font-light tracking-wide uppercase">{t('hero.stat1')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-extralight text-white mb-3">40%</div>
              <div className="text-white/60 text-sm lg:text-base font-light tracking-wide uppercase">{t('hero.stat2')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-extralight text-white mb-3">25%</div>
              <div className="text-white/60 text-sm lg:text-base font-light tracking-wide uppercase">{t('hero.stat3')}</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;