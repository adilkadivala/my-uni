import { BookOpen, Calendar, Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs } from "@radix-ui/react-tabs";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface LibrarySchedule {
  day: string;
  hours: string;
}

const coursesPeriod: LibrarySchedule[] = [
  { day: "Monday - Friday", hours: "08:00 - 20:00" },
  { day: "Saturday", hours: "10:00 - 15:00" },
  { day: "Sunday", hours: "Closed" },
];
const examPeriod: LibrarySchedule[] = [
  { day: "Monday - Friday", hours: "08:00 - 20:00" },
  { day: "Saturday", hours: "10:00 - 15:00" },
  { day: "Sunday", hours: "Open" },
];

const services = [
  "Book borrowing and returns",
  "Digital resources access",
  "Study rooms reservation",
  "Research assistance",
  "Printing and scanning",
];

export const Library = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-lg p-4 lg:p-6">
        <div className="flex items-center gap-3">
          <BookOpen className="h-6 w-6 dark:text-secondary" />
          <div>
            <h1 className="text-xl lg:text-2xl font-semibold dark:text-secondary">
              University Library
            </h1>
            <p className="text-sm dark:text-secondary/70">
              Your gateway to knowledge and research
            </p>
          </div>
        </div>
      </div>

      {/* Library Hours */}

      <Tabs
        className="border flex flex-col gap-5 space-y-5 p-2 rounded-sm"
        defaultValue="courses-period"
      >
        <TabsList className="grid w-full grid-cols-2 ">
          <TabsTrigger value="courses-period">Courses Period</TabsTrigger>
          <TabsTrigger value="exam-period">Exam Period</TabsTrigger>
        </TabsList>
        <TabsContent value="courses-period">
          <div className="space-y-3">
            {coursesPeriod.map((schedule, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 py-2 border-b border-border/50 last:border-b-0"
              >
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{schedule.day}</span>
                </div>
                <div className="text-right">
                  <span
                    className={
                      schedule.hours === "Closed"
                        ? "text-destructive"
                        : "text-foreground"
                    }
                  >
                    {schedule.hours}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="exam-period">
          <div className="space-y-3">
            {examPeriod.map((schedule, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 py-2 border-b border-border/50 last:border-b-0"
              >
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{schedule.day}</span>
                </div>
                <div className="text-right">
                  <span
                    className={
                      schedule.hours === "Open"
                        ? "text-green-700"
                        : "text-foreground"
                    }
                  >
                    {schedule.hours}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Services and Contact */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Library Services */}
        <Card>
          <CardHeader>
            <CardTitle>Library Services</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span className="text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Main Desk</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+30 210 123 4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>library@myuni.edu</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Building A, Ground Floor</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
