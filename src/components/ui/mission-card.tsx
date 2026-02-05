import { cn } from "@/lib/utils";

interface MissionCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  variant?: "default" | "alert" | "tactical";
}

export function MissionCard({
  title,
  description,
  icon,
  className,
  variant = "default"
}: MissionCardProps) {
  const variants = {
    default: "border-border bg-card",
    alert: "border-alert/50 bg-gradient-to-br from-alert/10 to-transparent",
    tactical: "border-tactical/50 bg-gradient-to-br from-tactical/20 to-transparent"
  };

  return (
    <div className={cn(
      "relative overflow-hidden rounded-sm border p-6 transition-all duration-300",
      "hover:shadow-tactical hover:border-alert/70",
      "before:absolute before:inset-0 before:bg-scan-line before:animate-scan before:opacity-0 hover:before:opacity-100",
      variants[variant],
      className
    )}>
      {icon && (
        <div className="mb-4 text-alert">
          {icon}
        </div>
      )}
      <h3 className="mb-2 font-stencil text-xl uppercase tracking-wider text-foreground">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}