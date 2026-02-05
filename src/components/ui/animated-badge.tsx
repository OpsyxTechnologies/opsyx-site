import { cn } from "@/lib/utils";

interface AnimatedBadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "alert" | "tactical" | "ops";
}

export function AnimatedBadge({ 
  children, 
  className,
  variant = "alert" 
}: AnimatedBadgeProps) {
  const variants = {
    alert: "bg-alert text-alert-foreground animate-pulse-alert",
    tactical: "bg-tactical text-tactical-foreground",
    ops: "bg-ops text-ops-foreground"
  };

  return (
    <span className={cn(
      "inline-flex items-center px-3 py-1 text-xs font-stencil uppercase tracking-wider rounded-sm",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}