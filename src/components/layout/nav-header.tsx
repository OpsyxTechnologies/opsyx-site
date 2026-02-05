import { useState, useEffect } from "react";
import { AnimatedBadge } from "@/components/ui/animated-badge";

export function NavHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-stencil text-2xl uppercase tracking-wider text-foreground">
              OPSYX
            </span>
          </div>

          <div className="hidden md:flex items-center gap-12">
            <button
              onClick={() => scrollToSection('mission')}
              className="font-stencil text-lg font-bold text-white uppercase tracking-wide hover:text-alert transition-colors"
            >
              Mission
            </button>
            <a
              href="/projects"
              className="font-stencil text-lg font-bold text-white uppercase tracking-wide hover:text-alert transition-colors px-4 py-2"
            >
              Projects
            </a>
            <button
              onClick={() => scrollToSection('values')}
              className="font-stencil text-lg font-bold text-white uppercase tracking-wide hover:text-alert transition-colors"
            >
              Value
            </button>
            <button
              onClick={() => scrollToSection('focus')}
              className="font-stencil text-lg font-bold text-white uppercase tracking-wide hover:text-alert transition-colors"
            >
              Strategic
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="font-stencil text-lg font-bold text-white uppercase tracking-wide hover:text-alert transition-colors"
            >
              Contact
            </button>
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-4 py-2 bg-alert text-alert-foreground font-stencil text-sm uppercase tracking-wider rounded-sm hover:bg-alert/90 transition-all duration-300"
          >
            Deploy
          </button>
        </div>
      </nav>
    </header>
  );
}