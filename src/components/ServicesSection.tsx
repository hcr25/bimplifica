import { 
  Calculator, 
  Box, 
  Users, 
  Settings,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      number: "1",
      icon: <Calculator className="h-8 w-8" />,
      title: "Quantity Take-offs & Estimations",
      description: "Accurate digital measurements using advanced tools for budgeting, progress tracking, and documentation with maximum reliability.",
      features: [
        "Precision digital measurements",
        "Advanced budgeting tools", 
        "Progress tracking systems",
        "Documentation management"
      ]
    },
    {
      number: "2", 
      icon: <Box className="h-8 w-8" />,
      title: "BIM Modeling & Coordination",
      description: "Development and integration of 3D, 4D, and 5D BIM models that optimize planning, construction, and project control, facilitating collaboration between all disciplines.",
      features: [
        "3D/4D/5D BIM modeling",
        "Cross-discipline coordination", 
        "Clash detection systems",
        "Model optimization"
      ]
    },
    {
      number: "3",
      icon: <Users className="h-8 w-8" />, 
      title: "AWP Methodology Consulting",
      description: "Implementation of Advanced Work Packaging methodology for efficient and organized site execution, significantly improving productivity and work control.",
      features: [
        "AWP implementation",
        "Workflow optimization",
        "Productivity enhancement",
        "Site execution planning"
      ]
    },
    {
      number: "4",
      icon: <Settings className="h-8 w-8" />,
      title: "Tech Solutions Development", 
      description: "Personalized adaptation of software and digital tools for integral management of take-offs, BIM modeling, and effective work control.",
      features: [
        "Custom software solutions",
        "Digital tool integration",
        "Workflow automation",
        "System optimization"
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Specialized Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions designed to transform your construction 
            project management through digital innovation and proven methodologies.
          </p>
        </div>

        {/* Services Process Flow */}
        <div className="mb-16">
          <div className="flex justify-center items-center space-x-4 mb-12">
            {services.map((_, index) => (
              <div key={index} className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                {index < services.length - 1 && (
                  <ArrowRight className="h-6 w-6 text-muted-foreground mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="professional-card p-8 hover-lift">
              {/* Service Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-accent mb-1">
                    Service {service.number}
                  </div>
                  <h3 className="text-xl font-bold text-primary">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Ready to Transform Your Projects?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover how our specialized services can optimize your construction 
              processes and deliver measurable results.
            </p>
            <Button variant="accent" size="lg">
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;