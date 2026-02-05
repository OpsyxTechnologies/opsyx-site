import tacticalGrid from "@/assets/tactical-grid.jpg";
import { AnimatedBadge } from "@/components/ui/animated-badge";
import { Award, FileCheck, Shield, Cpu } from "lucide-react";

export function StrategicFocus() {
  const services = [
    {
      icon: <Award className="w-5 h-5" />,
      title: "SDVOSB/VOSB Alignment",
      description: "Service-Disabled Veteran-Owned Small Business certified"
    },
    {
      icon: <FileCheck className="w-5 h-5" />,
      title: "Risk-Managed Security",
      description: "Comprehensive security consulting with measured risk assessment"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Threat-Informed Strategies",
      description: "Intelligence-driven approaches to emerging cyber threats"
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Precision Documentation",
      description: "Technical and operational documentation that speaks truth"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={tacticalGrid} 
          alt="Tactical Grid" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-stencil text-4xl md:text-5xl uppercase tracking-wider text-foreground mb-6">
            Strategic <span className="text-alert">Focus</span>
          </h2>
        </div>

        {/* Intersection Visualization */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-sm p-8">
            <p className="text-lg text-muted-foreground mb-8 text-center">
              We operate at the intersection of:
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <AnimatedBadge variant="alert">Cybersecurity</AnimatedBadge>
              <span className="text-alert text-2xl hidden md:block">+</span>
              <AnimatedBadge variant="tactical">Automation</AnimatedBadge>
              <span className="text-alert text-2xl hidden md:block">+</span>
              <AnimatedBadge variant="ops">Federal Compliance</AnimatedBadge>
            </div>

            <p className="text-sm text-muted-foreground text-center">
              Serving agencies, primes, and critical infrastructure organizations
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card/30 backdrop-blur-sm border border-border hover:border-alert/50 rounded-sm p-6 transition-all duration-300 hover:shadow-tactical"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-alert/10 rounded-sm text-alert group-hover:bg-alert group-hover:text-alert-foreground transition-all">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-stencil text-lg uppercase tracking-wider text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-body text-muted-foreground">
            Whether it's tactical assessment, automated deployment, or long-range compliance integration
          </p>
          <p className="text-xl font-stencil uppercase tracking-wider text-alert mt-4">
            Opsyx Technologies stands ready to deploy — deliberately and decisively
          </p>
        </div>
      </div>
    </section>
  );
}
