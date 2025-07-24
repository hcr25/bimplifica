import { 
  TrendingDown, 
  Target, 
  Clock, 
  Recycle,
  Eye
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const ResultsSection = () => {
  const { t } = useLanguage();
  
  const results = [
    {
      icon: <TrendingDown className="h-8 w-8" />,
      title: t('results.transparency.title'),
      percentage: "30%",
      subtitle: t('hero.stat1'),
      description: t('results.transparency.description'),
      details: t('results.transparency.details')
    },
    {
      icon: <Target className="h-8 w-8" />, 
      title: t('results.risks.title'),
      percentage: "40%", 
      subtitle: t('hero.stat2'),
      description: t('results.risks.description'),
      details: t('results.risks.details')
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: t('results.optimization.title'), 
      percentage: "25%",
      subtitle: t('hero.stat3'),
      description: t('results.optimization.description'),
      details: t('results.optimization.details')
    }
  ];

  const benefits = [
    {
      icon: <Recycle className="h-6 w-6" />,
      title: t('results.benefit1.title'),
      description: t('results.benefit1.description')
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: t('results.benefit2.title'),
      description: t('results.benefit2.description')
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: t('results.benefit3.title'),
      description: t('results.benefit3.description')
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: t('results.benefit4.title'),
      description: t('results.benefit4.description')
    }
  ];

  return (
    <section id="results" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('results.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('results.subtitle')}
          </p>
        </div>

        {/* Main Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {results.map((result, index) => (
            <div key={index} className="professional-card p-8 text-center hover-lift">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mx-auto mb-6">
                {result.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">
                {result.title}
              </h3>
              <div className="mb-4">
                <div className="text-4xl font-bold text-accent mb-2">
                  {result.percentage}
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  {result.subtitle}
                </div>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {result.description}
              </p>
              <p className="text-sm text-muted-foreground">
                {result.details}
              </p>
            </div>
          ))}
        </div>

        {/* Differential Value Section */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              {t('results.differential.title')}
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              {t('results.differential.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h4 className="font-semibold text-primary mb-3">
                  {benefit.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Section */}
        <div className="text-center">
          <div className="professional-card p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              {t('results.roi.title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-tech-green mb-2">3-6</div>
                <div className="text-sm text-muted-foreground">{t('results.roi.payback')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-tech-blue mb-2">200%+</div>
                <div className="text-sm text-muted-foreground">{t('results.roi.average')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">$500K+</div>
                <div className="text-sm text-muted-foreground">{t('results.roi.savings')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;