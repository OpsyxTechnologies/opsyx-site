import tacticalGrid from "@/assets/tactical-grid.jpg";
import { AnimatedBadge } from "@/components/ui/animated-badge";
import { Shield, Server, Globe, Crosshair, Network, Phone, FileCode, Lock, Briefcase } from "lucide-react";

export function StrategicFocus() {
  const goToContact = () => {
    window.location.href = '/contact';
  };

  const serviceCategories = [
    {
      category: "Cybersecurity",
      services: [
        { icon: <Crosshair className="w-5 h-5" />, title: "Purple Team Operations", description: "Unified offensive and defensive security assessments" },
        { icon: <Lock className="w-5 h-5" />, title: "Compliance & Risk", description: "NIST, CMMC, and federal security framework alignment" }
      ]
    },
    {
      category: "IT Infrastructure",
      services: [
        { icon: <Server className="w-5 h-5" />, title: "Server & Configuration", description: "Installation, hardening, and ongoing management" },
        { icon: <Phone className="w-5 h-5" />, title: "VoIP Systems", description: "Business phone systems design and deployment" }
      ]
    },
    {
      category: "Digital Services",
      services: [
        { icon: <Globe className="w-5 h-5" />, title: "Website Design", description: "Professional web presence and hosting solutions" },
        { icon: <FileCode className="w-5 h-5" />, title: "Domain & DNS", description: "Registration, management, and DNS architecture" }
      ]
    },
    {
      category: "Consulting",
      services: [
        { icon: <Network className="w-5 h-5" />, title: "Network Architecture", description: "Review, design, and optimization for small business" },
        { icon: <Briefcase className="w-5 h-5" />, title: "IT Strategy", description: "Technology roadmaps and vendor management" }
      ]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={tacticalGrid} alt="Tactical Grid" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-stencil text-4xl md:text-5xl uppercase tracking-wider text-foreground mb-6">
            Strategic <span className="text-alert">Focus</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-sm p-8">
            <p className="text-lg text-muted-foreground mb-8 text-center">We operate at the intersection of:</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <AnimatedBadge variant="alert">Cybersecurity</AnimatedBadge>
              <span className="text-alert text-2xl hidden md:block">+</span>
              <AnimatedBadge variant="ops">IT Infrastructure</AnimatedBadge>
              <span className="text-alert text-2xl hidden md:block">+</span>
              <AnimatedBadge variant="tactical">Digital Solutions</AnimatedBadge>
            </div>
            <p className="text-sm text-muted-foreground text-center">Serving federal agencies, enterprise clients, and small businesses</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {serviceCategories.map((category, catIndex) => (
            <div key={catIndex} className="space-y-4">
              <h3 className="font-stencil text-xl uppercase tracking-wider text-foreground border-b border-border pb-2">{category.category}</h3>
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} onClick={goToContact} className="group bg-card/30 backdrop-blur-sm border border-border hover:border-alert/50 rounded-sm p-5 transition-all duration-300 hover:shadow-tactical cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-alert/10 rounded-sm text-alert group-hover:bg-alert group-hover:text-alert-foreground transition-all">{service.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-stencil text-base uppercase tracking-wider text-foreground mb-1">{service.title}</h4>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                    <span className="text-xs text-alert opacity-0 group-hover:opacity-100 transition-opacity font-stencil uppercase">Get Quote</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-body text-muted-foreground mb-4">From network architecture to security compliance — tailored solutions for your mission</p>
          <button onClick={goToContact} className="inline-flex items-center gap-2 px-8 py-4 bg-alert text-alert-foreground font-stencil uppercase tracking-wider rounded-sm hover:bg-alert/90 transition-all duration-300 hover:shadow-glow">
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
}