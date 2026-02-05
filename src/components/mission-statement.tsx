import { Crosshair, Shield, Wrench, Compass } from "lucide-react";
import { MissionCard } from "@/components/ui/mission-card";

export function MissionStatement() {
  const missionPoints = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Secure Automation",
      description: "Developing secure automation frameworks using modern scripting and infrastructure tooling"
    },
    {
      icon: <Crosshair className="w-6 h-6" />,
      title: "Mission Assurance",
      description: "Delivering mission assurance through resilient architectures and risk-informed policy alignment"
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Operational Clarity",
      description: "Guiding organizations toward operational clarity, compliant execution, and tactical advantage"
    }
  ];

  return (
    <section id="mission" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-center flex flex-col items-center">
          {/* Mission Ready Statement as small comment above */}
          <span className="text-xs text-alert font-mono italic mb-2">Mission Ready: Delivered at the speed of relevance</span>
          <h2 className="font-stencil text-4xl md:text-5xl uppercase tracking-wider text-foreground mb-6">
            Mission <span className="text-alert">Objective</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            To integrate cybersecurity as a proactive force in mission-critical environments.<br />
            <span className="block mt-2 text-base text-foreground">Our approach leverages the strengths of both <span className="text-blue-600 font-semibold">Blue Team</span> (defensive operations) and <span className="text-red-600 font-semibold">Red Team</span> (offensive operations), combining them into a unified <span className="text-purple-600 font-semibold">Purple Team</span> strategy for maximum readiness and resilience.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {missionPoints.map((point, index) => (
            <MissionCard
              key={index}
              icon={point.icon}
              title={point.title}
              description={point.description}
              variant={index % 2 === 0 ? "alert" : "tactical"}
              className="animate-fade-in"
            />
          ))}
        </div>
      </div>
    </section>
  );
}