import { NavHeader } from "@/components/layout/nav-header";
import { Footer } from "@/components/layout/footer";
import { Shield, Server, Globe, Crosshair, Lock, Phone, FileCode, Network, Briefcase, CheckCircle } from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      description: "Offensive and defensive security operations to protect your mission-critical assets.",
      icon: <Shield className="w-8 h-8" />,
      color: "alert",
      services: [
        {
          title: "Purple Team Operations",
          icon: <Crosshair className="w-5 h-5" />,
          description: "Unified offensive and defensive security assessments that test your defenses while strengthening your security posture.",
          features: ["Penetration Testing", "Red Team Exercises", "Blue Team Defense", "Attack Simulation", "Threat Hunting"]
        },
        {
          title: "Compliance & Risk Management",
          icon: <Lock className="w-5 h-5" />,
          description: "Framework alignment and audit preparation for federal and commercial compliance requirements.",
          features: ["NIST 800-53/171", "CMMC Preparation", "Risk Assessments", "Policy Development", "Audit Support"]
        }
      ]
    },
    {
      id: "infrastructure",
      title: "IT Infrastructure",
      description: "Enterprise-grade infrastructure solutions designed for reliability and scalability.",
      icon: <Server className="w-8 h-8" />,
      color: "ops",
      services: [
        {
          title: "Server & Configuration",
          icon: <Server className="w-5 h-5" />,
          description: "Complete server lifecycle management from procurement through hardening and ongoing administration.",
          features: ["Server Deployment", "Windows/Linux Administration", "Virtualization", "Backup & Recovery", "Performance Tuning"]
        },
        {
          title: "VoIP & Communications",
          icon: <Phone className="w-5 h-5" />,
          description: "Business phone systems design, deployment, and management for modern communications.",
          features: ["System Design", "Cloud PBX", "SIP Trunking", "Unified Communications", "Call Analytics"]
        }
      ]
    },
    {
      id: "digital",
      title: "Digital Services",
      description: "Professional web presence and digital infrastructure for modern businesses.",
      icon: <Globe className="w-8 h-8" />,
      color: "tactical",
      services: [
        {
          title: "Website Design & Development",
          icon: <Globe className="w-5 h-5" />,
          description: "Professional web presence from design through deployment and hosting.",
          features: ["Custom Design", "React/Modern Frameworks", "CMS Integration", "E-commerce", "Hosting & Maintenance"]
        },
        {
          title: "Domain & DNS Management",
          icon: <FileCode className="w-5 h-5" />,
          description: "Complete domain lifecycle and DNS architecture for reliable digital presence.",
          features: ["Domain Registration", "DNS Architecture", "SSL/TLS Certificates", "Email Configuration", "CDN Setup"]
        }
      ]
    },
    {
      id: "consulting",
      title: "Consulting",
      description: "Strategic guidance to align technology with business objectives.",
      icon: <Briefcase className="w-8 h-8" />,
      color: "alert",
      services: [
        {
          title: "Network Architecture",
          icon: <Network className="w-5 h-5" />,
          description: "Network design, review, and optimization for performance, security, and growth.",
          features: ["Architecture Review", "Network Design", "Security Segmentation", "Cloud Integration", "Performance Optimization"]
        },
        {
          title: "IT Strategy & Advisory",
          icon: <Briefcase className="w-5 h-5" />,
          description: "Technology roadmaps and vendor management aligned with business goals.",
          features: ["Technology Roadmaps", "Vendor Evaluation", "Budget Planning", "Digital Transformation", "Staff Augmentation"]
        }
      ]
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case "alert": return "text-alert border-alert/30 bg-alert/10";
      case "ops": return "text-ops border-ops/30 bg-ops/10";
      case "tactical": return "text-tactical border-tactical/30 bg-tactical/10";
      default: return "text-alert border-alert/30 bg-alert/10";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <NavHeader />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 border-b border-border">
          <div className="container mx-auto px-6 text-center">
            <span className="text-xs text-alert font-mono uppercase tracking-widest">What We Do</span>
            <h1 className="font-stencil text-4xl md:text-6xl uppercase tracking-wider text-foreground mt-4 mb-6">
              Our <span className="text-alert">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From network architecture to security compliance — tailored solutions for your mission.
            </p>
          </div>
        </section>

        {/* Service Categories */}
        {serviceCategories.map((category, catIndex) => (
          <section key={category.id} id={category.id} className={catIndex % 2 === 0 ? "py-16" : "py-16 bg-card/30"}>
            <div className="container mx-auto px-6">
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-sm border ${getColorClass(category.color)}`}>
                  {category.icon}
                </div>
                <div>
                  <h2 className="font-stencil text-3xl uppercase tracking-wider text-foreground">
                    {category.title}
                  </h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-card/50 border border-border rounded-sm p-6 hover:border-alert/50 transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-2 rounded-sm border ${getColorClass(category.color)}`}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="font-stencil text-xl uppercase tracking-wider text-foreground">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-alert" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-stencil text-2xl uppercase tracking-wider text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Tell us about your project and we'll provide a tailored solution.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-alert text-alert-foreground font-stencil uppercase tracking-wider rounded-sm hover:bg-alert/90 transition-all duration-300 hover:shadow-glow">
              Request a Quote
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;