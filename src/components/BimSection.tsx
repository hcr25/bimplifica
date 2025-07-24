import { 
  Box, 
  Calendar, 
  DollarSign 
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const BimSection = () => {
  const { t } = useLanguage();
  
  const bimServices = [
    {
      icon: <Box className="h-8 w-8" />,
      title: t('bim.modeling3d.title'),
      description: t('bim.modeling3d.description')
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: t('bim.planning4d.title'), 
      description: t('bim.planning4d.description')
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: t('bim.control5d.title'),
      description: t('bim.control5d.description')
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-muted/20 to-muted/40">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('bim.title')}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        {/* BIM Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {bimServices.map((service, index) => (
            <div key={index} className="text-center">
              {/* Icon Container */}
              <div className="relative mb-8">
                <div className="w-24 h-24 mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-center text-accent border border-muted/20">
                  {service.icon}
                </div>
                {/* Connecting Line - except for last item */}
                {index < bimServices.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-accent/40 to-muted/20 transform -translate-y-0.5"></div>
                )}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Description */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-white/50">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('bim.expertise')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BimSection;