import { Star, UtensilsCrossed, BookOpen, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const highlights = [
  {
    icon: UtensilsCrossed,
    title: "Lunch Special",
    description: "Pork steak with smashed",
    time: "",
  },
  {
    icon: BookOpen,
    title: "Library Hours",
    description: "Open until 10:00 today",
    time: "",
  },
  {
    icon: AlertCircle,
    title: "New Student Orientation",
    description: "Tomorrow at 10:00 AM",
    time: "",
  },
];

export const TodaysHighlights = () => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Star className="h-5 w-5 text-primary" />
          Today's Highlights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 divide-y">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-sm hover:bg-secondary/50 transition-colors"
              >
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground text-sm">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
