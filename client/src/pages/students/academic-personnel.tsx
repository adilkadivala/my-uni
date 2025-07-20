import { Users, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FacultyMembers {
  name: string;
  title: string;
  specialization: string;
  email: string;
  phone: string;
  building: string;
}

const facultyMembers: FacultyMembers[] = [
  {
    name: "Prof. Maria Joseph",
    title: "Professor of Computer Science",
    specialization: "Database Systems, Data Mining",
    email: "m.joseph@myuni.edu",
    phone: "+30 210 123 4501",
    building: "Building B, Room 301",
  },
  {
    name: "Prof. Maria Joseph",
    title: "Professor of Computer Science",
    specialization: "Database Systems, Data Mining",
    email: "m.joseph@myuni.edu",
    phone: "+30 210 123 4501",
    building: "Building B, Room 301",
  },
  {
    name: "Prof. Maria Joseph",
    title: "Professor of Computer Science",
    specialization: "Database Systems, Data Mining",
    email: "m.joseph@myuni.edu",
    phone: "+30 210 123 4501",
    building: "Building B, Room 301",
  },
  {
    name: "Prof. Maria Joseph",
    title: "Professor of Computer Science",
    specialization: "Database Systems, Data Mining",
    email: "m.joseph@myuni.edu",
    phone: "+30 210 123 4501",
    building: "Building B, Room 301",
  },
];

export const AcademicPersonnel = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-lg p-4 lg:p-6">
        <div className="flex items-center gap-3">
          <Users className="h-6 w-6 dark:text-secondary" />
          <div>
            <h1 className="text-xl lg:text-2xl font-semibold dark:text-secondary"></h1>
            <p className="text-sm dark:text-secondary/70">
              Meet our distinguished faculty members
            </p>
          </div>
        </div>
      </div>

      {/* Faculty List */}
      <div className="space-y-4">
        {facultyMembers.map((faculty, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex  flex-col md:flex-row items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-muted-foreground" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground mb-1">
                    {faculty.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {faculty.title}
                  </p>

                  <div className="mb-3">
                    <p className="text-sm font-medium text-foreground mb-1">
                      Specialization
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {faculty.specialization}
                    </p>
                  </div>
                </div>

                <div className="text-right space-y-2 flex-shrink-0">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>{faculty.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>{faculty.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{faculty.building}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
