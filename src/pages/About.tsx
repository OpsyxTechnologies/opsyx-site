import { NavHeader } from "@/components/layout/nav-header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/config/site";
import { Shield, Target, FileCheck, Heart, Lightbulb, Award, User } from "lucide-react";

const About = () => {
  const values = [
    { icon: <Shield className="w-5 h-5" />, title: "Integrity", description: "Truth in analysis, transparency in action" },
    { icon: <Target className="w-5 h-5" />, title: "Resilience", description: "Systems and teams that bounce forward — not just back" },
    { icon: <FileCheck className="w-5 h-5" />, title: "Clarity", description: "Documentation and execution with precision and purpose" },
    { icon: <Heart className="w-5 h-5" />, title: "Service", description: "Grounded in veteran principles — mission before ego" },
    { icon: <Lightbulb className="w-5 h-5" />, title: "Innovation", description: "Bridging legacy wisdom with modern threat intelligence" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavHeader />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 border-b border-border">
          <div className="container mx-auto px-6 text-center">
            <span className="text-xs text-alert font-mono uppercase tracking-widest">About Us</span>
            <h1 className="font-stencil text-4xl md:text-6xl uppercase tracking-wider text-foreground mt-4 mb-6">
              Mission <span className="text-alert">Objective</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              To integrate cybersecurity as a proactive force in mission-critical environments.
            </p>
          </div>
        </section>

        {/* Purple Team Approach */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-card/50 border border-border rounded-sm p-8">
              <h2 className="font-stencil text-2xl uppercase tracking-wider text-foreground mb-6 text-center">
                Our <span className="text-purple-500">Purple Team</span> Approach
              </h2>
              <p className="text-muted-foreground mb-6 text-center">
                We leverage the strengths of both offensive and defensive operations, combining them into a unified strategy for maximum readiness and resilience.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 border border-red-500/30 rounded-sm bg-red-500/5">
                  <span className="font-stencil text-red-500 text-lg">Red Team</span>
                  <p className="text-sm text-muted-foreground mt-2">Offensive Operations</p>
                </div>
                <div className="text-center p-4 border border-purple-500/30 rounded-sm bg-purple-500/5">
                  <span className="font-stencil text-purple-500 text-lg">Purple Team</span>
                  <p className="text-sm text-muted-foreground mt-2">Unified Strategy</p>
                </div>
                <div className="text-center p-4 border border-blue-500/30 rounded-sm bg-blue-500/5">
                  <span className="font-stencil text-blue-500 text-lg">Blue Team</span>
                  <p className="text-sm text-muted-foreground mt-2">Defensive Operations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-stencil text-3xl uppercase tracking-wider text-foreground mb-4">
                Core <span className="text-ops">Values</span>
              </h2>
              <p className="text-muted-foreground">What drives our operational excellence</p>
            </div>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4 p-5 bg-background border border-border rounded-sm hover:border-alert/50 transition-all">
                  <div className="p-2 bg-alert/10 rounded-sm text-alert">{value.icon}</div>
                  <div>
                    <h3 className="font-stencil text-lg uppercase tracking-wider text-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-stencil text-3xl uppercase tracking-wider text-foreground mb-4">
                  Leadership
                </h2>
              </div>
              <div className="bg-card/50 border border-border rounded-sm p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 rounded-full bg-alert/10 border-2 border-alert flex items-center justify-center">
                    <User className="w-16 h-16 text-alert" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-stencil text-2xl uppercase tracking-wider text-foreground mb-2">
                      {siteConfig.team.ceo.name}
                    </h3>
                    <p className="text-alert font-stencil uppercase tracking-wider mb-4">{siteConfig.team.ceo.title} & Founder</p>
                    <p className="text-muted-foreground mb-4">
                      Cyber Warfare Technician with a Master's degree in Information Assurance. CompTIA trifecta and CySA+ certified, qualified as Senior Host Analyst and Basic Network Analyst. Currently pursuing SANS certification courses (SEC504, ICS310).
                    </p>
                    <p className="text-muted-foreground">
                      Service-disabled veteran bringing military precision to commercial cybersecurity operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SDVOSB */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-alert/10 border border-alert/30 rounded-sm mb-6">
                <Award className="w-5 h-5 text-alert" />
                <span className="font-stencil text-alert uppercase tracking-wider">SDVOSB Verified</span>
              </div>
              <h2 className="font-stencil text-3xl uppercase tracking-wider text-foreground mb-6">
                Veteran-Owned Small Business
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Opsyx Technologies is a Service-Disabled Veteran-Owned Small Business (SDVOSB) registered with SAM.gov and verified for federal contracting opportunities.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 bg-background border border-border rounded-sm">
                  <span className="text-xs text-muted-foreground block mb-1">SAM.gov UEI</span>
                  <span className="font-mono text-foreground">{siteConfig.credentials.uei}</span>
                </div>
                <div className="p-4 bg-background border border-border rounded-sm">
                  <span className="text-xs text-muted-foreground block mb-1">CAGE Code</span>
                  <span className="font-mono text-foreground">{siteConfig.credentials.cage}</span>
                </div>
                <div className="p-4 bg-background border border-border rounded-sm">
                  <span className="text-xs text-muted-foreground block mb-1">D-U-N-S</span>
                  <span className="font-mono text-foreground">{siteConfig.credentials.duns}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-stencil text-2xl uppercase tracking-wider text-foreground mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-muted-foreground mb-8">Let's discuss how we can support your mission.</p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-alert text-alert-foreground font-stencil uppercase tracking-wider rounded-sm hover:bg-alert/90 transition-all duration-300 hover:shadow-glow">
              Contact Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;