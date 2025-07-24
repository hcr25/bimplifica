import { 
  Search, 
  FileText, 
  Cog, 
  BarChart3
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const ProcessSection = () => {
  const { t } = useLanguage();
  
  const processSteps = [
    {
      icon: <Search className="h-8 w-8" />,
      title: t('process.step1.title'),
      description: t('process.step1.description'),
      details: [
        t('process.step1.detail1'),
        t('process.step1.detail2'),
        t('process.step1.detail3')
      ]
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: t('process.step2.title'),
      description: t('process.step2.description'),
      details: [
        t('process.step2.detail1'),
        t('process.step2.detail2'),
        t('process.step2.detail3')
      ]
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: t('process.step3.title'), 
      description: t('process.step3.description'),
      details: [
        t('process.step3.detail1'),
        t('process.step3.detail2'),
        t('process.step3.detail3')
      ]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: t('process.step4.title'),
      description: t('process.step4.description'),
      details: [
        t('process.step4.detail1'),
        t('process.step4.detail2'),
        t('process.step4.detail3')
      ]
    }
  ];

  return (
    <section id="process" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('process.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('process.subtitle')}
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-accent to-accent/30 z-0"></div>
              )}
              
              {/* Step Card */}
              <div className="professional-card p-6 text-center hover-lift relative z-10">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mx-auto mb-6">
                  {step.icon}
                </div>
                <div className="mb-4">
                  <div className="text-sm font-medium text-accent mb-2">
                    {t('process.step.label')} {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-primary">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {step.description}
                </p>
                <div className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></div>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Visualization */}
        <div className="bg-white rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
            {t('process.timeline.title')}
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/20"></div>
            
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-white font-bold text-lg mr-8">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary">{t('process.timeline.week1')}</h4>
                  <p className="text-muted-foreground">{t('process.timeline.week1.desc')}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-tech-blue flex items-center justify-center text-white font-bold text-lg mr-8">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary">{t('process.timeline.week3')}</h4>
                  <p className="text-muted-foreground">{t('process.timeline.week3.desc')}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-tech-green flex items-center justify-center text-white font-bold text-lg mr-8">
                  3
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary">{t('process.timeline.week7')}</h4>
                  <p className="text-muted-foreground">{t('process.timeline.week7.desc')}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg mr-8">
                  4
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary">{t('process.timeline.ongoing')}</h4>
                  <p className="text-muted-foreground">{t('process.timeline.ongoing.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;