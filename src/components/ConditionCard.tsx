import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ConditionCardProps {
  title: string;
  description: string;
  imageUrl: string;
  risk: "High" | "Medium" | "Low";
  delay?: number;
}

const ConditionCard = ({
  title,
  description,
  imageUrl,
  risk,
  delay = 0,
}: ConditionCardProps) => {
  const riskStyles = {
    High: "bg-destructive/10 text-destructive border-destructive/20",
    Medium: "bg-warning/10 text-warning border-warning/20",
    Low: "bg-success/10 text-success border-success/20",
  };

  return (
    <div
      className="group glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        <Badge
          className={cn(
            "absolute top-3 right-3 border",
            riskStyles[risk]
          )}
        >
          {risk} Risk
        </Badge>
      </div>

      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ConditionCard;
