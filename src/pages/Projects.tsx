import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-command-center.jpg";
import { ProjectsNavHeader } from "@/components/projects-nav-header";

const GITHUB_ORG = "opsyx-technologies";

function ProjectIntro() {
  return (
    <section className="py-16 text-center bg-background border-b border-border">
      <h1 className="font-stencil text-4xl md:text-5xl uppercase tracking-wider text-foreground mb-4">Projects</h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Explore our latest public projects and open-source initiatives. This page automatically updates to showcase all repositories from our GitHub organization, Opsyx Technologies.
      </p>
    </section>
  );
}

function ProjectList() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/orgs/${GITHUB_ORG}/repos?type=public&sort=updated`)
      .then((res) => res.json())
      .then((data) => {
        setRepos(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load projects.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-12 text-muted-foreground">Loading projects...</div>;
  if (error) return <div className="text-center py-12 text-alert">{error}</div>;
  if (!repos.length) return <div className="text-center py-12 text-muted-foreground">No public projects found.</div>;

  return (
    <div className="container mx-auto px-6 py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-background border border-border rounded-lg p-6 shadow-md hover:border-alert transition-all duration-300"
        >
          <h2 className="font-stencil text-xl text-foreground mb-2">{repo.name}</h2>
          <p className="text-muted-foreground mb-4">{repo.description || "No description provided."}</p>
          <span className="text-xs text-muted-foreground">Last updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
        </a>
      ))}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      <ProjectsNavHeader />
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
        <section className="py-16 animate-fade-in">
          <h1 className="font-stencil text-6xl md:text-8xl uppercase tracking-wider text-foreground mb-6 animate-slide-up">
            <span className="text-foreground">OPSYX</span>
            <span className="text-alert block md:inline md:ml-4">PROJECTS</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in animation-delay-200">
            Explore our latest public projects and open-source initiatives. This page automatically updates to showcase all repositories from our GitHub organization, Opsyx Technologies.
          </p>
        </section>
        <ProjectList />
      </div>
    </main>
  );
}
