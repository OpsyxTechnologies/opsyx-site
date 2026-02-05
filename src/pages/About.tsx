import { NavHeader } from "@/components/layout/nav-header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/config/site";
import { Shield, Target, FileCheck, Heart, Lightbulb, Award, Clock, CheckCircle, Crosshair } from "lucide-react";

const About = () => {
  const values = [
    { icon: <Shield className="w-5 h-5" />, title: "Integrity", description: "Truth in analysis, transparency in action" },
    { icon: <Target className="w-5 h-5" />, title: "Resilience", description: "Systems and teams that bounce forward — not just back" },
    { icon: <FileCheck className="w-5 h-5" />, title: "Clarity", description: "Documentation and execution with precision and purpose" },
    { icon: <Heart className="w-5 h-5" />, title: "Service", description: "Grounded in veteran principles — mission before ego" },
    { icon: <Lightbulb className="w-5 h-5" />, title: "Innovation", description: "Bridging legacy wisdom with modern threat intelligence" },
  ];

  const whatYouGet = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cleared & Trusted",
      description: "Able to operate in classified and unclassified environments. Public sector, private sector, DoD — we move seamlessly across all of them."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Military Discipline",
      description: "13 years of service means we show up, communicate clearly, hit deadlines, and take ownership. No excuses, no surprises."
    },
    {
      icon: <Crosshair className="w-6 h-6" />,
      title: "Operational Mindset",
      description: "We've worked under pressure in environments where failure isn't an option. That same intensity applies to your project."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "We Deliver",
      description: "Plain and simple — we do what we say we're going to do. Your mission becomes our mission until it's complete."
    },
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
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-stencil text-3xl uppercase tracking-wider text-foreground mb-4">
                  Our <span className="text-purple-500">Purple Team</span> Approach
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We leverage the strengths of both offensive and defensive operations, combining them into a unified strategy for maximum readiness and resilience.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Red Team */}
                <div className="border border-red-500/30 rounded-sm bg-red-500/5 p-6">
                  <div className="text-center mb-4">
                    <span className="font-stencil text-red-500 text-xl">Red Team</span>
                    <p className="text-sm text-red-400 mt-1">Offensive Operations</p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    We think like attackers. Red Team operations simulate real-world threats to find vulnerabilities before malicious actors do.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">›</span>
                      <span>Penetration testing & exploitation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">›</span>
                      <span>Social engineering assessments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">›</span>
                      <span>Attack path mapping</span>
                    </li>
                  </ul>
                </div>

                {/* Purple Team */}
                <div className="border border-purple-500/30 rounded-sm bg-purple-500/5 p-6 md:-mt-4 md:mb-4 md:scale-105 shadow-lg">
                  <div className="text-center mb-4">
                    <span className="font-stencil text-purple-500 text-xl">Purple Team</span>
                    <p className="text-sm text-purple-400 mt-1">Unified Strategy</p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    The best of both worlds. Purple Team integrates offensive findings with defensive improvements in real-time — not as separate engagements, but as one continuous process.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-0.5">›</span>
                      <span>Attack simulation + immediate defense tuning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-0.5">›</span>
                      <span>Detection gap analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-0.5">›</span>
                      <span>Continuous security validation</span>
                    </li>
                  </ul>
                </div>

                {/* Blue Team */}
                <div className="border border-blue-500/30 rounded-sm bg-blue-500/5 p-6">
                  <div className="text-center mb-4">
                    <span className="font-stencil text-blue-500 text-xl">Blue Team</span>
                    <p className="text-sm text-blue-400 mt-1">Defensive Operations</p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    We protect what matters. Blue Team operations focus on detecting, responding to, and preventing threats before they cause damage.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">›</span>
                      <span>Security monitoring & threat detection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">›</span>
                      <span>Incident response & forensics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">›</span>
                      <span>Hardening & configuration management</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-4 bg-card/50 border border-border rounded-sm text-center">
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground font-semibold">Why it matters:</span> Most firms offer Red or Blue separately. 
                  We operate as Purple by default — because security isn't about finding problems or fixing them, it's about doing both simultaneously.
                </p>
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

        {/* What You Get */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-stencil text-3xl uppercase tracking-wider text-foreground mb-4">
                  What You <span className="text-alert">Get</span>
                </h2>
                <p className="text-muted-foreground">When you partner with Opsyx Technologies</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {whatYouGet.map((item, index) => (
                  <div key={index} className="bg-card/50 border border-border rounded-sm p-6 hover:border-alert/50 transition-all">
                    <div className="p-3 bg-alert/10 rounded-sm text-alert w-fit mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-stencil text-lg uppercase tracking-wider text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-background border border-alert/30 rounded-sm">
                <p className="text-center text-muted-foreground">
                  <span className="text-foreground font-semibold">Bottom line:</span> You get a team that's been in the trenches, 
                  understands operational pressure, and delivers like your mission depends on it — because it does.
                </p>
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