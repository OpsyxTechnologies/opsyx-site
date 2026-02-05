import { NavHeader } from "@/components/layout/nav-header";
import { HeroSection } from "@/components/sections/hero-section";
import { MissionStatement } from "@/components/sections/mission-statement";
import { CoreValues } from "@/components/sections/core-values";
import { StrategicFocus } from "@/components/sections/strategic-focus";
import { Footer } from "@/components/layout/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavHeader />
      <HeroSection />
      <section id="mission">
        <MissionStatement />
      </section>
      <section id="values">
        <CoreValues />
      </section>
      <section id="focus">
        <StrategicFocus />
      </section>
      <Footer />
    </div>
  );
};

export default Index;