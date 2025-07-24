import { MapPin, Mail, Globe } from "lucide-react";
import teamImage from "@/assets/team-collaboration.jpg";
import { useLanguage } from "@/hooks/useLanguage";

const AboutSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                {t('about.title')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t('about.description1')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.description2')}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary">{t('about.location')}</p>
                  <p className="text-muted-foreground">Santiago, Chile</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary">{t('about.email')}</p>
                  <p className="text-muted-foreground">contacto@bimplifica.cl</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary">{t('about.website')}</p>
                  <p className="text-muted-foreground">www.bimplifica.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:order-first">
            <div className="relative">
              <img 
                src={teamImage} 
                alt="BIMPLIFICA team collaboration" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="bg-white professional-card p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              {t('about.mission.title')}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.mission.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;