import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const locations = [
  {
    name: "Conference Room",
    building: "Building A, Ground Floor",
  },
  {
    name: "Library",
    building: "Building B, All Floors",
  },
  {
    name: "Auditoriums",
    building: "Building C, Room 101",
  },
  {
    name: "Secretaries",
    building: "Building D, Room 205",
  },
];

export const CampusMaps = () => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <MapPin className="h-5 w-5 text-primary" />
          Campus Maps
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 divide-y">
          {locations.map((location, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-sm hover:bg-secondary/50 transition-colors cursor-pointer"
            >
              <span className="font-medium text-foreground text-sm">
                {location.name}
              </span>
              <span className="text-xs text-muted-foreground">
                {location.building}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
