import { NavHeader } from "@/components/layout/nav-header";
import { HeroSection } from "@/components/sections/hero-section";
import { MissionStatement } from "@/components/sections/mission-statement";
import { CoreValues } from "@/components/sections/core-values";
import { StrategicFocus } from "@/components/sections/strategic-focus";
import { ContactSection } from "@/components/sections/contact-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavHeader />
      <HeroSection />
      <div className="flex flex-col gap-16 items-center w-full px-4 py-8">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-center mb-6 tracking-wide">Mission</h2>
          <MissionStatement />
        </div>
        <div id="values" className="w-full">
          <h2 className="text-3xl font-bold text-center mb-6 tracking-wide">Value</h2>
          <CoreValues />
        </div>
        <div id="focus" className="w-full">
          <h2 className="text-3xl font-bold text-center mb-6 tracking-wide">Strategic Focus</h2>
          <StrategicFocus />
        </div>
        <div id="contact" className="w-full">
          <h2 className="text-3xl font-bold text-center mb-6 tracking-wide">Contact</h2>
          <ContactSection />
        </div>
      </div>
      {/* Footer with company logo and social media links */}
      <footer className="w-full bg-background border-t border-border mt-12 py-8 flex flex-col items-center">
        {/* Company Logo (text fallback for better contrast) */}
        <div className="mb-4 flex items-center justify-center">
          <span className="font-stencil text-2xl text-foreground uppercase tracking-wider">OPSYX</span>
          <span className="text-alert ml-2 font-stencil text-2xl uppercase tracking-wider">TECHNOLOGIES</span>
        </div>
        {/* Social Media Section */}
        <div className="flex gap-6 mb-2">
          <a href={import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com/company/opsyx-technologies"} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-alert transition-colors">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
          </a>
          <a href={import.meta.env.VITE_GITHUB_URL || "https://github.com/opsyx-technologies"} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-alert transition-colors">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
          <a href={import.meta.env.VITE_GOOGLE_URL || "https://google.com/search?q=Opsyx+Technologies"} target="_blank" rel="noopener noreferrer" aria-label="Google" className="hover:text-alert transition-colors">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M21.35 11.1h-9.18v2.98h5.27c-.23 1.22-1.39 3.58-5.27 3.58-3.17 0-5.76-2.62-5.76-5.84s2.59-5.84 5.76-5.84c1.81 0 3.02.77 3.72 1.43l2.54-2.47c-1.62-1.51-3.7-2.43-6.26-2.43-5.18 0-9.39 4.21-9.39 9.31s4.21 9.31 9.39 9.31c5.42 0 9.02-3.81 9.02-9.18 0-.62-.07-1.09-.16-1.56z"/></svg>
          </a>
          <a href={import.meta.env.VITE_TWITTER_URL || "https://twitter.com/opsyxtech"} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-alert transition-colors">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.865 9.865 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.94 13.94 0 0 1 1.671 3.149 4.916 4.916 0 0 0 3.195 9.723 4.9 4.9 0 0 1 .964 9.1v.062a4.916 4.916 0 0 0 3.946 4.817 4.902 4.902 0 0 1-2.212.084 4.918 4.918 0 0 0 4.588 3.417A9.868 9.868 0 0 1 .594 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.514 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
          </a>
        </div>
        <span className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Opsyx Technologies. All rights reserved.</span>
      </footer>
    </div>
  );
};

export default Index;
