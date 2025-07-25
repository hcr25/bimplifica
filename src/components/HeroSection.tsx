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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
      {/* Background Image with Professional Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Construction site with BIM technology" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 to-slate-800/90"></div>
      </div>

      {/* Clean Minimal Content */}
      <div className="container-professional relative z-10 text-center">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Professional Badge */}
          <div className="inline-flex items-center px-8 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="text-sm font-light text-white/90 tracking-wide">{t('hero.badge')}</span>
          </div>

          {/* Minimal Typography Headline */}
          <div className="space-y-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight text-white leading-[0.85] tracking-tight">
              {t('hero.title1')}
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-accent leading-tight">
              {t('hero.title2')}
            </h2>
          </div>

          {/* Clean Description */}
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-white/80 max-w-5xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* Single Professional CTA */}
          <div className="pt-8">
            <Button 
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-white px-16 py-6 text-lg font-light tracking-wide rounded-full transition-all duration-500 hover:scale-105 shadow-2xl"
            >
              {t('hero.cta1')}
            </Button>
          </div>

        </div>

        {/* Minimal Statistics */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-full max-w-5xl">
          <div className="grid grid-cols-3 gap-16 text-center">
            <div>
              <div className="text-5xl lg:text-6xl font-extralight text-accent mb-4">30%</div>
              <div className="text-white/60 text-sm lg:text-base font-light tracking-widest uppercase">
                {t('hero.stat1')}
              </div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-extralight text-accent mb-4">40%</div>
              <div className="text-white/60 text-sm lg:text-base font-light tracking-widest uppercase">
                {t('hero.stat2')}
              </div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-extralight text-accent mb-4">25%</div>
              <div className="text-white/60 text-sm lg:text-base font-light tracking-widest uppercase">
                {t('hero.stat3')}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;