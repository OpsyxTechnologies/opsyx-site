import { NavHeader } from "@/components/layout/nav-header";
import { HeroSection } from "@/components/sections/hero-section";
import { Footer } from "@/components/layout/footer";
import { Link } from "react-router-dom";
import { Shield, Server, Globe, Briefcase, ArrowRight, FileText } from "lucide-react";

const Index = () => {
  const serviceHighlights = [
    { icon: <Shield className="w-6 h-6" />, title: "Cybersecurity", description: "Purple Team operations & compliance", href: "/services#cybersecurity" },
    { icon: <Server className="w-6 h-6" />, title: "IT Infrastructure", description: "Server deployment & management", href: "/services#infrastructure" },
    { icon: <Globe className="w-6 h-6" />, title: "Digital Services", description: "Web design & DNS architecture", href: "/services#digital" },
    { icon: <Briefcase className="w-6 h-6" />, title: "Consulting", description: "Strategy & network architecture", href: "/services#consulting" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavHeader />
      <HeroSection />

      {/* Services Preview */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs text-alert font-mono uppercase tracking-widest">What We Do</span>
            <h2 className="font-stencil text-3xl md:text-4xl uppercase tracking-wider text-foreground mt-2">
              Our <span className="text-alert">Services</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {serviceHighlights.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="group bg-background border border-border rounded-sm p-6 hover:border-alert/50 transition-all duration-300"
              >
                <div className="p-3 bg-alert/10 rounded-sm text-alert w-fit mb-4 group-hover:bg-alert group-hover:text-alert-foreground transition-all">
                  {service.icon}
                </div>
                <h3 className="font-stencil text-lg uppercase tracking-wider text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <span className="text-xs text-alert font-stencil uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  Learn More <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-alert font-stencil uppercase tracking-wider hover:underline"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs text-ops font-mono uppercase tracking-widest">Recent Engagement</span>
            <h2 className="font-stencil text-3xl md:text-4xl uppercase tracking-wider text-foreground mt-2">
              Featured <span className="text-ops">Work</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Link
              to="/work"
              className="group block bg-card/50 border border-border rounded-sm p-8 hover:border-ops/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="p-4 bg-ops/10 rounded-sm text-ops">
                  <FileText className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Financial Services Client</span>
                  <h3 className="font-stencil text-2xl uppercase tracking-wider text-foreground mt-1 mb-3">
                    Server Stability & Integration Audit
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive infrastructure assessment for a CFP practice expanding into media production. 
                    Identified critical configuration issues, developed hybrid cloud architecture, and provided 
                    7-year TCO analysis saving the client over $2,600 in avoided costs.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 text-xs bg-ops/10 text-ops border border-ops/30 rounded-sm">Infrastructure</span>
                    <span className="px-2 py-1 text-xs bg-ops/10 text-ops border border-ops/30 rounded-sm">Compliance</span>
                    <span className="px-2 py-1 text-xs bg-ops/10 text-ops border border-ops/30 rounded-sm">Hybrid Cloud</span>
                  </div>
                  <span className="text-sm text-ops font-stencil uppercase tracking-wider flex items-center gap-1 group-hover:underline">
                    Read Case Study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;