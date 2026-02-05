import heroImage from "@/assets/hero-command-center.jpg";
import { AnimatedBadge } from "@/components/ui/animated-badge";
import { ChevronDown, Shield, Terminal } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Cyber Command Center" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"></div>
      </div>

      {/* Scan Line Effect */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="h-px bg-gradient-to-r from-transparent via-alert to-transparent animate-scan"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="mb-6 animate-fade-in">
          <AnimatedBadge variant="alert">SDVOSB // MISSION READY</AnimatedBadge>
        </div>

        <h1 className="font-stencil text-6xl md:text-8xl uppercase tracking-wider mb-6 animate-slide-up">
          <span className="text-foreground">OPSYX</span>
          <span className="text-alert block md:inline md:ml-4">TECHNOLOGIES</span>
        </h1>

          {/* Company Model */}
          <div className="mb-4">
            <span className="text-base md:text-lg font-mono text-alert tracking-wide">defend forward and operate resilient</span>
          </div>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in animation-delay-200">
          Mission-Critical Cybersecurity at the Speed of Relevance
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12 animate-fade-in animation-delay-400">
          <div className="flex items-center gap-3 text-foreground">
            <Shield className="w-5 h-5 text-alert" />
            <span className="font-body font-semibold">Purple Team Operations</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-border"></div>
          <div className="flex items-center gap-3 text-foreground">
            <Terminal className="w-5 h-5 text-ops" />
            <span className="font-body font-semibold">Secure Automation</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-border"></div>
          <div className="flex items-center gap-3 text-foreground">
            <span className="text-alert">●</span>
            <span className="font-body font-semibold">Federal Compliance</span>
          </div>
        </div>

        <button
          onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center gap-2 px-8 py-4 bg-alert text-alert-foreground font-stencil uppercase tracking-wider rounded-sm hover:bg-alert/90 transition-all duration-300 hover:shadow-glow animate-fade-in animation-delay-600"
        >
          Initiate Contact
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>

      {/* Split Screen Overlay for Purple Team Visualization */}
      <div className="absolute inset-0 z-5 pointer-events-none opacity-20">
        <div className="h-full flex">
          <div className="w-1/2 border-r border-alert/30">
            <div className="h-full flex items-center justify-center">
              <span className="font-stencil text-4xl text-alert/50 -rotate-90">OFFENSIVE</span>
            </div>
          </div>
          <div className="w-1/2">
            <div className="h-full flex items-center justify-center">
              <span className="font-stencil text-4xl text-ops/50 rotate-90">DEFENSIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}