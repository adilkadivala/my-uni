import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  buttonText: string;
  buttonVariant?: "default" | "outline" | "secondary";
  className?: string;
}

export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  buttonText,
  buttonVariant = "outline",
  className,
}: ServiceCardProps) => {
  return (
    <Card
      className={cn(
        "group cursor-pointer transition-all duration-200 hover:shadow-md hover:bg-service-card-hover border-border",
        className
      )}
    >
      <CardContent className="p-6">
        {/* Header with icon and arrow */}
        <div className="flex items-start justify-between mb-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
          <Button variant={buttonVariant} size="sm" className="w-full mt-4">
            {buttonText}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
