export function CoreValues() {
  const values = [
    {
      title: "Integrity",
      description: "Truth in analysis, transparency in action"
    },
    {
      title: "Resilience",
      description: "Systems and teams that bounce forward — not just back"
    },
    {
      title: "Clarity",
      description: "Documentation and execution with precision and purpose"
    },
    {
      title: "Service",
      description: "Grounded in veteran principles — mission before ego"
    },
    {
      title: "Innovation",
      description: "Bridging legacy wisdom with modern threat intelligence and cyber tooling"
    }
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-stencil text-4xl md:text-5xl uppercase tracking-wider text-foreground mb-6">
            Core <span className="text-ops">Values</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What drives our operational excellence
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative flex items-start gap-6 py-6 border-b border-border/50 hover:border-alert/50 transition-all duration-300"
            >
              <span className="font-stencil text-2xl text-alert opacity-50 group-hover:opacity-100 transition-opacity">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="flex-1">
                <h3 className="font-stencil text-xl uppercase tracking-wider text-foreground mb-2 group-hover:text-alert transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-alert/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}