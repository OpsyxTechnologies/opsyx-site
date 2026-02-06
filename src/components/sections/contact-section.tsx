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

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              
                href={`mailto:${siteConfig.emails.general}`}
                className="group flex items-center gap-4 p-4 bg-card border border-border hover:border-alert/50 rounded-sm transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-alert" />
                <div className="text-left">
                  <span className="font-stencil text-sm uppercase tracking-wider text-foreground block">Email</span>
                  <span className="text-xs text-muted-foreground">{siteConfig.emails.general}</span>
                </div>
              </a>

              
                href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
                className="group flex items-center gap-4 p-4 bg-card border border-border hover:border-alert/50 rounded-sm transition-all duration-300"
              >
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
              <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-card border border-border hover:border-alert hover:text-alert rounded-sm transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                <span className="font-stencil text-xs uppercase tracking-wider">Facebook</span>
              </a>
              <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-card border border-border hover:border-alert hover:text-alert rounded-sm transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                <span className="font-stencil text-xs uppercase tracking-wider">Instagram</span>
              </a>
            </div>

            <div className="border-t border-border/50 pt-8">
              <h3 className="font-stencil text-sm uppercase tracking-wider text-center text-muted-foreground mb-4">
                Federal Credentials
              </h3>
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
