import { NavHeader } from "@/components/layout/nav-header";
import { Footer } from "@/components/layout/footer";
import { FileText, Server, Shield, CheckCircle, Calendar, Building, ArrowRight } from "lucide-react";

const Work = () => {
  const caseStudies = [
    {
      id: "ofg-infrastructure",
      client: "Orchestral Financial Group",
      clientType: "Financial Services / CFP Practice",
      title: "Server Stability & Integration Audit",
      subtitle: "Infrastructure Assessment & Hybrid Cloud Strategy",
      date: "December 2025",
      duration: "2 weeks",
      services: ["Infrastructure Assessment", "Vendor Due Diligence", "Hybrid Cloud Architecture", "Compliance Planning"],
      challenge: "Client received a server quote from a vendor that appeared undersized for their planned growth. With three business entities launching and media production workflows planned, they needed expert validation before committing to a $6,600+ infrastructure investment.",
      approach: [
        "Conducted comprehensive vendor due diligence including HPE partnership verification",
        "Analyzed quoted hardware against projected 5-year workload requirements",
        "Identified critical configuration issues: single-channel memory, insufficient storage capacity",
        "Developed alternative infrastructure recommendation with 7-year lifecycle planning",
        "Designed hybrid cloud architecture integrating on-premises server with AWS services"
      ],
      results: [
        "Prevented investment in undersized infrastructure that would require replacement in 3-4 years",
        "Identified $2,647 in hidden costs from emergency upgrades with original quote",
        "Recommended solution delivers lower 7-year TCO ($13,500 vs $16,147)",
        "Designed SEC/FINRA-compliant backup and archival strategy",
        "Provided clear implementation roadmap aligned with mid-2027 launch timeline"
      ],
      technologies: ["HPE ProLiant", "Windows Server 2025", "AWS S3/Glacier", "Hybrid Cloud", "RAID Configuration"],
      compliance: ["SEC Rule 204-2", "FINRA Rule 4511", "Regulation S-P", "CFP Board Standards"],
      deliverable: "18-page technical assessment report with executive summary, risk analysis, and actionable recommendations"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavHeader />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 border-b border-border">
          <div className="container mx-auto px-6 text-center">
            <span className="text-xs text-alert font-mono uppercase tracking-widest">Portfolio</span>
            <h1 className="font-stencil text-4xl md:text-6xl uppercase tracking-wider text-foreground mt-4 mb-6">
              Our <span className="text-alert">Work</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real-world engagements demonstrating our approach to mission-critical IT and cybersecurity challenges.
            </p>
          </div>
        </section>

        {/* Case Studies */}
        {caseStudies.map((study) => (
          <section key={study.id} className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8 pb-8 border-b border-border">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building className="w-4 h-4 text-alert" />
                      <span className="text-sm text-muted-foreground">{study.clientType}</span>
                    </div>
                    <h2 className="font-stencil text-3xl uppercase tracking-wider text-foreground mb-2">
                      {study.title}
                    </h2>
                    <p className="text-lg text-muted-foreground">{study.subtitle}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{study.date}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {study.services.map((service, idx) => (
                        <span key={idx} className="px-2 py-1 text-xs font-mono bg-alert/10 text-alert border border-alert/30 rounded-sm">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-8">
                  <h3 className="font-stencil text-xl uppercase tracking-wider text-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-px bg-alert"></span>
                    The Challenge
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                </div>

                {/* Approach */}
                <div className="mb-8">
                  <h3 className="font-stencil text-xl uppercase tracking-wider text-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-px bg-ops"></span>
                    Our Approach
                  </h3>
                  <div className="space-y-3">
                    {study.approach.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <ArrowRight className="w-4 h-4 text-ops mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="mb-8 bg-card/50 border border-border rounded-sm p-6">
                  <h3 className="font-stencil text-xl uppercase tracking-wider text-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-px bg-alert"></span>
                    Results
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-alert mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Details */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-card/30 border border-border rounded-sm p-5">
                    <h4 className="font-stencil text-sm uppercase tracking-wider text-foreground mb-3 flex items-center gap-2">
                      <Server className="w-4 h-4 text-ops" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 text-xs bg-ops/10 text-ops border border-ops/30 rounded-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-card/30 border border-border rounded-sm p-5">
                    <h4 className="font-stencil text-sm uppercase tracking-wider text-foreground mb-3 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-alert" />
                      Compliance Frameworks
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {study.compliance.map((item, idx) => (
                        <span key={idx} className="px-2 py-1 text-xs bg-alert/10 text-alert border border-alert/30 rounded-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Deliverable */}
                <div className="flex items-center gap-4 p-4 bg-background border border-border rounded-sm">
                  <FileText className="w-8 h-8 text-alert" />
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Deliverable</span>
                    <p className="text-foreground">{study.deliverable}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="py-16 bg-card/30 border-t border-border">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-stencil text-2xl uppercase tracking-wider text-foreground mb-4">
              Have a Similar Challenge?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help with your infrastructure, security, or compliance needs.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-alert text-alert-foreground font-stencil uppercase tracking-wider rounded-sm hover:bg-alert/90 transition-all duration-300 hover:shadow-glow">
              Start a Conversation
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Work;