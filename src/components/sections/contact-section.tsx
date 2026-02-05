import { Linkedin, Github, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { AnimatedBadge } from "@/components/ui/animated-badge";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  return (
    <section className="py-24 bg-gradient-tactical relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-stencil text-4xl md:text-5xl uppercase tracking-wider text-foreground mb-6">
            Establish <span className="text-alert">Contact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to deploy mission-critical cybersecurity solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-sm p-8">
            <div className="text-center mb-8">
              <AnimatedBadge variant="alert" className="mb-4">
                OPERATIONAL STATUS: ACTIVE
              </AnimatedBadge>
              <p className="text-muted-foreground">
                Engage with us through secure channels
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <a href={`mailto:${siteConfig.emails.general}`} className="group flex items-center gap-4 p-4 bg-card border border-border hover:border-alert/50 rounded-sm transition-all duration-300">
                <Mail className="w-5 h-5 text-alert" />
                <div className="text-left">
                  <span className="font-stencil text-sm uppercase tracking-wider text-foreground block">General Inquiries</span>
                  <span className="text-xs text-muted-foreground">{siteConfig.emails.general}</span>
                </div>
              </a>

              <a href={`mailto:${siteConfig.emails.primary}`} className="group flex items-center gap-4 p-4 bg-card border border-border hover:border-alert/50 rounded-sm transition-all duration-300">
                <Mail className="w-5 h-5 text-ops" />
                <div className="text-left">
                  <span className="font-stencil text-sm uppercase tracking-wider text-foreground block">Primary Contact</span>
                  <span className="text-xs text-muted-foreground">{siteConfig.emails.primary}</span>
                </div>
              </a>

              <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="group flex items-center gap-4 p-4 bg-card border border-border hover:border-alert/50 rounded-sm transition-all duration-300">
                <Phone className="w-5 h-5 text-alert" />
                <div className="text-left">
                  <span className="font-stencil text-sm uppercase tracking-wider text-foreground block">Phone</span>
                  <span className="text-xs text-muted-foreground">{siteConfig.phone}</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-sm">
                <MapPin className="w-5 h-5 text-ops" />
                <div className="text-left">
                  <span className="font-stencil text-sm uppercase tracking-wider text-foreground block">Location</span>
                  <span className="text-xs text-muted-foreground">{siteConfig.location}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-card border border-border hover:border-alert hover:text-alert rounded-sm transition-all duration-300">
                <Linkedin className="w-4 h-4" />
                <span className="font-stencil text-xs uppercase tracking-wider">LinkedIn</span>
              </a>
              <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-card border border-border hover:border-alert hover:text-alert rounded-sm transition-all duration-300">
                <Github className="w-4 h-4" />
                <span className="font-stencil text-xs uppercase tracking-wider">GitHub</span>
              </a>
              <a href={siteConfig.socials.discord} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-card border border-border hover:border-alert hover:text-alert rounded-sm transition-all duration-300">
                <MessageCircle className="w-4 h-4" />
                <span className="font-stencil text-xs uppercase tracking-wider">Discord</span>
              </a>
              <a href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-card border border-border hover:border-alert hover:text-alert rounded-sm transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span className="font-stencil text-xs uppercase tracking-wider">X</span>
              </a>
            </div>

            <div className="border-t border-border/50 pt-8">
              <h3 className="font-stencil text-sm uppercase tracking-wider text-center text-muted-foreground mb-4">Federal Credentials</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-3 bg-card/50 border border-border/50 rounded-sm">
                  <span className="font-stencil text-xs text-alert block">SAM.gov UEI</span>
                  <span className="text-xs text-foreground font-mono">{siteConfig.credentials.uei}</span>
                </div>
                <div className="p-3 bg-card/50 border border-border/50 rounded-sm">
                  <span className="font-stencil text-xs text-alert block">CAGE Code</span>
                  <span className="text-xs text-foreground font-mono">{siteConfig.credentials.cage}</span>
                </div>
                <div className="p-3 bg-card/50 border border-border/50 rounded-sm">
                  <span className="font-stencil text-xs text-alert block">D-U-N-S</span>
                  <span className="text-xs text-foreground font-mono">{siteConfig.credentials.duns}</span>
                </div>
                <div className="p-3 bg-card/50 border border-border/50 rounded-sm">
                  <span className="font-stencil text-xs text-ops block">Status</span>
                  <span className="text-xs text-foreground font-mono">{siteConfig.credentials.type}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border/50">
              <div className="flex flex-wrap gap-4 justify-center text-xs text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-alert rounded-full animate-pulse"></span>
                  SDVOSB Verified
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-ops rounded-full animate-pulse"></span>
                  SAM.gov Registered
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-tactical rounded-full animate-pulse"></span>
                  Federal Contracting Ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
