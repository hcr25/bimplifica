import { MapPin, Mail, Globe } from "lucide-react";
import teamImage from "@/assets/team-collaboration.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                About BIMPLIFICA
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                BIMPLIFICA is a consulting firm specialized in digital project management for 
                the construction industry. We integrate precise quantity take-offs, 3D/4D/5D BIM 
                modeling, and AWP methodology to reduce costs, optimize resources, and shorten timelines.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of expert engineers and digital specialists transform traditional 
                construction processes through innovative technology solutions, delivering 
                measurable results for our clients across Latin America.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary">Location</p>
                  <p className="text-muted-foreground">Santiago, Chile</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary">Email</p>
                  <p className="text-muted-foreground">contacto@bimplifica.cl</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary">Website</p>
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
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To revolutionize the construction industry through digital innovation, 
              technical precision, and collaborative methodologies that deliver exceptional 
              value to our clients while advancing sustainable building practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;