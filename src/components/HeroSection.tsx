import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-construction-bim.jpg";
import { useLanguage } from "@/hooks/useLanguage";
const HeroSection = () => {
  const {
    t
  } = useLanguage();
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Dynamic Background with Morphing Shape */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Construction site with BIM technology" className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-orange-900/40"></div>
        
        {/* Floating Morphing Background Element */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent/20 to-purple-500/20 animate-morphing-bg blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-accent/20 animate-morphing-bg blur-2xl animation-delay-4000"></div>
      </div>

      {/* Revolutionary Content Layout */}
      <div className="container-professional relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 lg:gap-12 items-center min-h-screen py-2 lg:py-20 rounded-none">
          
          {/* Main Content - Typography Experiment */}
          <div className="lg:col-span-8 space-y-3 lg:space-y-12">
            
            {/* Glowing Tech Badge */}
            <div className="inline-flex items-center animate-slide-up-1">
              <div className="px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-accent/20 to-purple-500/20 backdrop-blur-sm border border-accent/30 rounded-full">
                <span className="font-mono text-xs lg:text-sm text-accent tracking-widest uppercase animate-text-glow">
                  {t('hero.badge')}
                </span>
              </div>
            </div>

            {/* Experimental Typography Layout - Responsive */}
            <div className="space-y-1 lg:space-y-8 animate-slide-up-2">
              <h1 className="font-space font-light tracking-tighter leading-[0.8]">
                <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[12rem] text-white">
                  {t('hero.title1')}
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl text-transparent bg-gradient-to-r from-accent via-purple-400 to-blue-400 bg-clip-text font-medium ml-2 sm:ml-4 lg:ml-8 xl:ml-16 mt-0 lg:mt-4">
                  {t('hero.title2')}
                </span>
              </h1>
            </div>

            {/* Innovative Description with Mono Font - Mobile Optimized */}
            <div className="animate-slide-up-3 max-w-4xl py-1 lg:py-4">
              <p className="font-mono text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/80 leading-relaxed tracking-wide">
                <span className="text-accent">/// </span>
                {t('hero.subtitle')}
              </p>
            </div>

            {/* Futuristic CTA - Touch Optimized */}
            <div className="animate-slide-up-3 pt-2 lg:pt-8 pb-1 lg:pb-2">
              <button onClick={scrollToContact} className="group relative overflow-hidden bg-gradient-to-r from-accent to-orange-600 text-black px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-full font-space font-medium text-base sm:text-lg tracking-wide transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:shadow-accent/50 active:scale-95 touch-manipulation">
                <span className="relative z-10">{t('hero.cta1')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>

          </div>

          {/* Stats Section - Mobile & Desktop Optimized */}
          <div className="lg:col-span-4 mt-1 lg:mt-0">
            
            {/* Mobile: Horizontal Layout */}
            <div className="lg:hidden grid grid-cols-3 gap-1 animate-slide-up-3">
              {[{
              value: "30%",
              label: t('hero.stat1')
            }, {
              value: "40%",
              label: t('hero.stat2')
            }, {
              value: "25%",
              label: t('hero.stat3')
            }].map((stat, index) => <div key={index} className="group text-center">
                  <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-2 hover:bg-white/10 transition-all duration-500 hover:scale-85 rounded-lg my-0 py-[8px]">
                    <div className="font-mono text-xl sm:text-2xl font-light text-accent mb-1 group-hover:animate-text-glow">
                      {stat.value}
                    </div>
                    <div className="font-space text-white/70 text-xs tracking-wider uppercase leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </div>)}
            </div>

            {/* Desktop: Vertical Floating Layout */}
            <div className="hidden lg:block space-y-8 animate-float">
              {[{
              value: "30%",
              label: t('hero.stat1')
            }, {
              value: "40%",
              label: t('hero.stat2')
            }, {
              value: "25%",
              label: t('hero.stat3')
            }].map((stat, index) => <div key={index} className="group">
                  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                    <div className="font-mono text-5xl lg:text-6xl font-light text-accent mb-4 group-hover:animate-text-glow">
                      {stat.value}
                    </div>
                    <div className="font-space text-white/70 text-sm tracking-widest uppercase">
                      {stat.label}
                    </div>
                  </div>
                </div>)}
            </div>

          </div>

        </div>
      </div>
    </section>;
};
export default HeroSection;