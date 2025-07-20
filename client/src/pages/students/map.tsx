import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Navigation,
  PhoneCall,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Locations {
  name: string;
  building: string;
  description: string;
  hours: string;
  phone: string;
  email: string;
  hall: string;
}

const locations: Locations[] = [
  {
    name: "Library",
    building: "Building A, Ground Floor",
    description: "Primary dining facility with daily specials",
    hours: "07:00 - 22:00",
    phone: "+30 210 123 4501",
    email: "restaurant@myuni.edu",
    hall: "Hall 1",
  },
  {
    name: "Student Groups",
    building: "Building C, 1st Floor",
    description: "Registration, financial aid, and student support",
    hours: "07:00 - 22:00",
    phone: "+30 210 123 4501",
    email: "restaurant@myuni.edu",
    hall: "Hall 1",
  },
];

export const Map = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-lg p-4 lg:p-6">
        <div className="flex items-center gap-3">
          <MapPin className="h-6 w-6 dark:text-secondary" />
          <div>
            <h1 className="text-xl lg:text-2xl font-semibold dark:text-secondary">
              Campus Map
            </h1>
            <p className="text-sm dark:text-secondary/70">
              Find your way around MyUni campus
            </p>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <Card className="min-h-[300px]">
        <CardContent className="p-6">
          <div className="h-64 bg-secondary/20 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
              <p className="text-lg font-medium text-foreground">Google Map</p>
              <p className="text-sm text-muted-foreground">
                Interactive campus map would be displayed here
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Location Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {locations.map((location, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                {location.name}
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {location.building}
              </p>
              <p className="text-sm text-muted-foreground">
                {location.description}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{location.hours}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>{location.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{location.email}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{location.hall}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Navigation className="h-4 w-4 mr-2" />
                  Direction
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <PhoneCall className="h-4 w-4 mr-2" />
                  Call
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
