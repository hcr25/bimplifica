import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BimSection from "@/components/BimSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/hooks/useLanguage";

const Index = () => {
  useEffect(() => {
    // Smooth scrolling animation on scroll
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        
        <main>
          <section id="home" data-section="home">
            <HeroSection />
          </section>
          <section id="about" data-section="about">
            <AboutSection />
          </section>
          <section id="services" data-section="services">
            <ServicesSection />
          </section>
          <section id="bim" data-section="bim">
            <BimSection />
          </section>
          <section id="results" data-section="results">
            <ResultsSection />
          </section>
          <section id="process" data-section="process">
            <ProcessSection />
          </section>
          <section id="contact" data-section="contact">
            <ContactSection />
          </section>
        </main>
        
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;