import { 
  Eye, 
  Users2, 
  CheckSquare,
  Cloud,
  Headphones,
  Palette
} from "lucide-react";

const SystemSection = () => {
  const features = [
    {
      icon: <Eye className="h-8 w-8" />,
      title: "360° Access",
      description: "Complete visualization of models, schedules, and project documents from a single centralized portal."
    },
    {
      icon: <Users2 className="h-8 w-8" />,
      title: "Centralized Collaboration", 
      description: "Integrated chat and contextual comment system with our BIM team to resolve doubts immediately."
    },
    {
      icon: <CheckSquare className="h-8 w-8" />,
      title: "Digital Approach",
      description: "Real-time validation of deliverables and KPIs to make faster and more informed decisions."
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Traceable History",
      description: "Secure cloud storage of all versions, RFIs, and technical documentation with personalized access control for each stakeholder."
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Expert BIM Support", 
      description: "Specialized technical team with response time under 24 hours. Remote and on-site support according to your project's specific needs."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Flexibility & Customization",
      description: "We adapt fields, reports, and workflows to your existing processes, facilitating adoption and maximizing value from day one."
    }
  ];

  return (
    <section id="system" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Project Management System
            <span className="block text-accent">by BIMPLIFICA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our integrated digital platform centralizes all aspects of your construction project, 
            enabling seamless collaboration and real-time project control.
          </p>
        </div>

        {/* Main Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="professional-card p-6 text-center hover-lift">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Platform Demo Section */}
        <div className="professional-card p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">
                Centralized Digital Platform
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-tech-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-tech-blue"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Real-time Collaboration</h4>
                    <p className="text-muted-foreground">
                      Instant communication between all project stakeholders with contextual comments and integrated approval workflows.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-tech-green/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-tech-green"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Automated Reporting</h4>
                    <p className="text-muted-foreground">
                      Automatic progress reports compared to planned schedules with detailed KPI tracking and performance analytics.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Secure Access Control</h4>
                    <p className="text-muted-foreground">
                      Granular permission management ensuring the right information reaches the right people at the right time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:order-first">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-border">
                <div className="space-y-4">
                  <div className="h-4 bg-primary/10 rounded w-3/4"></div>
                  <div className="h-4 bg-accent/10 rounded w-1/2"></div>
                  <div className="h-32 bg-tech-blue/10 rounded-lg border-2 border-dashed border-tech-blue/20"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-16 bg-tech-green/10 rounded border border-tech-green/20"></div>
                    <div className="h-16 bg-accent/10 rounded border border-accent/20"></div>
                  </div>
                  <div className="h-4 bg-primary/10 rounded w-2/3"></div>
                </div>
                <div className="text-center mt-6">
                  <span className="text-sm text-muted-foreground">Interactive Platform Preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemSection;