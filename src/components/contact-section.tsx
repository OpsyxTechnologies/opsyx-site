import { Linkedin, Github, Mail, Globe } from "lucide-react";
import { AnimatedBadge } from "@/components/ui/animated-badge";

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

        <div className="max-w-2xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-sm p-8">
            <div className="text-center mb-8">
              <AnimatedBadge variant="alert" className="mb-4">
                OPERATIONAL STATUS: ACTIVE
              </AnimatedBadge>
              <p className="text-muted-foreground">
                Engage with us through secure channels
              </p>
            </div>

            <div className="grid gap-4">
              {/* ...existing code... */}

              <button
                onClick={() => window.location.href = 'mailto:contact@opsyx.com'}
                className="group flex items-center gap-4 p-4 bg-alert text-alert-foreground hover:bg-alert/90 rounded-sm transition-all duration-300 hover:shadow-glow"
              >
                <Mail className="w-5 h-5" />
                <span className="font-stencil uppercase tracking-wider">
                  Initiate Secure Communication
                </span>
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-border/50">
              <div className="flex flex-wrap gap-4 justify-center text-xs text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-alert rounded-full animate-pulse"></span>
                  SDVOSB Certified
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-ops rounded-full animate-pulse"></span>
                  Federal Ready
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-tactical rounded-full animate-pulse"></span>
                  Mission Capable
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}