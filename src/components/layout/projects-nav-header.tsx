import { Link, useLocation } from "react-router-dom";

export function ProjectsNavHeader() {
  const location = useLocation();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-all duration-300">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="font-stencil text-2xl uppercase tracking-wider text-foreground">
              OPSYX
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="font-stencil text-lg font-bold text-white uppercase tracking-wide hover:text-alert transition-colors px-4 py-2">
              Home
            </Link>
            <Link to="/projects" className={`font-stencil text-lg font-bold text-white uppercase tracking-wide hover:text-alert transition-colors px-4 py-2 ${location.pathname === '/projects' ? 'text-alert' : ''}`}>
              Projects
            </Link>
            <a href={import.meta.env.VITE_LINKEDIN_URL || "https://www.linkedin.com/in/opsyx-technologies-llc"} target="_blank" rel="noopener noreferrer" className="text-white hover:text-alert transition-colors">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
            </a>
            <a href={import.meta.env.VITE_TWITTER_URL || "https://twitter.com/opsyxtech"} target="_blank" rel="noopener noreferrer" className="text-white hover:text-alert transition-colors">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.865 9.865 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.94 13.94 0 0 1 1.671 3.149 4.916 4.916 0 0 0 3.195 9.723 4.9 4.9 0 0 1 .964 9.1v.062a4.916 4.916 0 0 0 3.946 4.817 4.902 4.902 0 0 1-2.212.084 4.918 4.918 0 0 0 4.588 3.417A9.868 9.868 0 0 1 .594 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.514 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
