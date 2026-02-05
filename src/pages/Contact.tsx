import { useState } from "react";
import { NavHeader } from "@/components/layout/nav-header";
import { Footer } from "@/components/layout/footer";
import { AnimatedBadge } from "@/components/ui/animated-badge";
import { siteConfig } from "@/config/site";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const services = [
    { value: "purple-team", label: "Purple Team Operations" },
    { value: "compliance", label: "Compliance & Risk (NIST, CMMC)" },
    { value: "server", label: "Server Installation & Configuration" },
    { value: "voip", label: "VoIP Phone Systems" },
    { value: "website", label: "Website Design & Hosting" },
    { value: "domain", label: "Domain & DNS Management" },
    { value: "network", label: "Network Architecture Review" },
    { value: "it-strategy", label: "IT Strategy & Consulting" },
    { value: "other", label: "Other / General Inquiry" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Quote Request: ${formData.service || "General Inquiry"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${siteConfig.emails.general}?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <NavHeader />
      
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedBadge variant="alert" className="mb-4">REQUEST A QUOTE</AnimatedBadge>
            <h1 className="font-stencil text-4xl md:text-5xl uppercase tracking-wider text-foreground mb-6">
              Contact <span className="text-alert">Us</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell us about your project and we'll get back to you within 24 hours
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-card/50 backdrop-blur-sm border border-border rounded-sm p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block font-stencil text-sm uppercase tracking-wider text-foreground mb-2">Name *</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground focus:border-alert focus:outline-none transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block font-stencil text-sm uppercase tracking-wider text-foreground mb-2">Email *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground focus:border-alert focus:outline-none transition-colors" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block font-stencil text-sm uppercase tracking-wider text-foreground mb-2">Phone</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground focus:border-alert focus:outline-none transition-colors" placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <label className="block font-stencil text-sm uppercase tracking-wider text-foreground mb-2">Company</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground focus:border-alert focus:outline-none transition-colors" placeholder="Your company" />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block font-stencil text-sm uppercase tracking-wider text-foreground mb-2">Service Interested In *</label>
                  <select name="service" required value={formData.service} onChange={handleChange} className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground focus:border-alert focus:outline-none transition-colors">
                    <option value="">Select a service...</option>
                    {services.map((service) => (
                      <option key={service.value} value={service.label}>{service.label}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block font-stencil text-sm uppercase tracking-wider text-foreground mb-2">Message *</label>
                  <textarea name="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground focus:border-alert focus:outline-none transition-colors resize-none" placeholder="Tell us about your project or requirements..."></textarea>
                </div>

                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-alert text-alert-foreground font-stencil uppercase tracking-wider rounded-sm hover:bg-alert/90 transition-all duration-300 hover:shadow-glow">
                  <Send className="w-5 h-5" />
                  Submit Request
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-sm p-6">
                <h3 className="font-stencil text-lg uppercase tracking-wider text-foreground mb-4">Direct Contact</h3>
                <div className="space-y-4">
                  <a href={`mailto:${siteConfig.emails.general}`} className="flex items-center gap-3 text-muted-foreground hover:text-alert transition-colors">
                    <Mail className="w-5 h-5 text-alert" />
                    <span>{siteConfig.emails.general}</span>
                  </a>
                  <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-3 text-muted-foreground hover:text-alert transition-colors">
                    <Phone className="w-5 h-5 text-alert" />
                    <span>{siteConfig.phone}</span>
                  </a>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-ops" />
                    <span>{siteConfig.location}</span>
                  </div>
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-sm p-6">
                <h3 className="font-stencil text-lg uppercase tracking-wider text-foreground mb-4">Federal Credentials</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">SAM.gov UEI</span>
                    <span className="font-mono text-foreground">{siteConfig.credentials.uei}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">CAGE Code</span>
                    <span className="font-mono text-foreground">{siteConfig.credentials.cage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <span className="font-mono text-alert">{siteConfig.credentials.type}</span>
                  </div>
                </div>
              </div>

              <div className="bg-alert/10 border border-alert/30 rounded-sm p-6">
                <p className="text-sm text-foreground">
                  <span className="font-stencil text-alert">Response Time:</span> We typically respond within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}