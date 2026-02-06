import { siteConfig } from "@/config/site";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export function Footer() {
  const certifications = [
    { name: "A+", org: "CompTIA", color: "text-red-500 border-red-500/30 bg-red-500/10" },
    { name: "Network+", org: "CompTIA", color: "text-red-500 border-red-500/30 bg-red-500/10" },
    { name: "Security+", org: "CompTIA", color: "text-red-500 border-red-500/30 bg-red-500/10" },
    { name: "CySA+", org: "CompTIA", color: "text-red-500 border-red-500/30 bg-red-500/10" },
    { name: "PenTest+", org: "CompTIA", color: "text-red-500 border-red-500/30 bg-red-500/10" },
    { name: "Linux+", org: "CompTIA", color: "text-red-500 border-red-500/30 bg-red-500/10" },
    { name: "CSAP", org: "CompTIA", color: "text-red-500 border-red-500/30 bg-red-500/10" },
    { name: "CC", org: "ISC2", color: "text-green-500 border-green-500/30 bg-green-500/10" },
    { name: "CyberOps", org: "Cisco", color: "text-blue-500 border-blue-500/30 bg-blue-500/10" },
    { name: "CEH", org: "EC-Council", color: "text-amber-500 border-amber-500/30 bg-amber-500/10" },
    { name: "PowerShell", org: "Microsoft", color: "text-sky-500 border-sky-500/30 bg-sky-500/10" },
    { name: "RHCSA", org: "Red Hat", color: "text-red-600 border-red-600/30 bg-red-600/10" },
  ];

  const federalCredentials = [
    {
      label: "SAM.gov UEI",
      value: siteConfig.credentials.uei,
      url: `https://sam.gov/search/?keywords=${siteConfig.credentials.uei}`,
    },
    {
      label: "CAGE Code",
      value: siteConfig.credentials.cage,
      url: `https://sam.gov/search/?keywords=${siteConfig.credentials.cage}`,
    },
    {
      label: "D-U-N-S",
      value: siteConfig.credentials.duns,
      url: `https://www.dnb.com/duns-number/lookup.html`,
    },
  ];

  return (
    <footer className="w-full bg-card/30 border-t border-border mt-12">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="font-stencil text-xl text-foreground uppercase tracking-wider">OPSYX</span>
              <span className="text-alert ml-2 font-stencil text-xl uppercase tracking-wider">TECHNOLOGIES</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Mission-Critical IT & Cybersecurity Solutions</p>
            <div className="flex gap-4">
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-alert transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
              </a>
              <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-alert transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
              <a href={siteConfig.socials.discord} target="_blank" rel="noopener noreferrer" aria-label="Discord" className="hover:text-alert transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
              </a>
              <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-alert transition-colors">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a>
        <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-alert transition-colors">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
        </a>
        <a href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-alert transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-stencil text-sm uppercase tracking-wider text-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a href={"mailto:" + siteConfig.emails.general} className="flex items-center gap-2 text-muted-foreground hover:text-alert transition-colors">
                <Mail className="w-4 h-4" />
                {siteConfig.emails.general}
              </a>
              <a href={"tel:" + siteConfig.phone.replace(/[^0-9]/g, '')} className="flex items-center gap-2 text-muted-foreground hover:text-alert transition-colors">
                <Phone className="w-4 h-4" />
                {siteConfig.phone}
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                {siteConfig.location}
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-stencil text-sm uppercase tracking-wider text-foreground mb-4">Federal Credentials</h4>
            <div className="space-y-3 text-sm">
              {federalCredentials.map((cred, index) => (
                <a key={index} href={cred.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group hover:text-alert transition-colors">
                  <span className="text-muted-foreground group-hover:text-alert">{cred.label}</span>
                  <span className="font-mono text-foreground group-hover:text-alert flex items-center gap-1">
                    {cred.value}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </a>
              ))}
              <div className="mt-4 flex items-center gap-2 px-3 py-2 bg-alert/10 border border-alert/30 rounded-sm">
                <span className="w-2 h-2 bg-alert rounded-full animate-pulse"></span>
                <span className="text-sm font-stencil text-alert">SDVOSB Verified</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-stencil text-sm uppercase tracking-wider text-foreground mb-4">Technical Certifications</h4>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert, index) => (
                <div key={index} className={`px-2 py-1 text-xs font-mono border rounded-sm ${cert.color}`} title={`${cert.org} ${cert.name}`}>
                  {cert.name}
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Industry certifications held by our team
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Opsyx Technologies. All rights reserved.</span>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="/about" className="hover:text-alert transition-colors">About</a>
            <a href="/services" className="hover:text-alert transition-colors">Services</a>
            <a href="/work" className="hover:text-alert transition-colors">Work</a>
            <a href="/contact" className="hover:text-alert transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

