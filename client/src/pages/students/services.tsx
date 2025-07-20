import {
  Briefcase,
  Building2,
  Users,
  Heart,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const officesData = [
  {
    name: "Registrar's Office",
    description: "Student records, transcripts, enrollment verification",
    phone: "+30 210 123 4567",
    building: "Building A, Room 105",
    email: "registrar@myuni.edu",
    hours: "Mon-Fri: 9:00-15:00",
  },
  {
    name: "Financial Aid Office",
    description: "Scholarships, grants, student loans, payment plans",
    phone: "+30 210 123 4567",
    building: "Building A, Room 105",
    email: "registrar@myuni.edu",
    hours: "Mon-Fri: 9:00-15:00",
  },
  {
    name: "Student Services",
    description: "Student ID cards, general inquiries, campus information",
    phone: "+30 210 123 4567",
    building: "Building A, Room 105",
    email: "registrar@myuni.edu",
    hours: "Mon-Fri: 9:00-15:00",
  },
  {
    name: "Career Services",
    description: "Job placement, internships, career counseling",
    phone: "+30 210 123 4567",
    building: "Building A, Room 105",
    email: "registrar@myuni.edu",
    hours: "Mon-Fri: 9:00-15:00",
  },
  {
    name: "International Office",
    description: "Student records, transcripts, enrollment verification",
    phone: "+30 210 123 4567",
    building: "Building A, Room 105",
    email: "registrar@myuni.edu",
    hours: "Mon-Fri: 9:00-15:00",
  },
  {
    name: "Registrar's Office",
    description: "Exchange programs, visa assistance, international students",
    phone: "+30 210 123 4567",
    building: "Building A, Room 105",
    email: "registrar@myuni.edu",
    hours: "Mon-Fri: 9:00-15:00",
  },
];

const studentClubsData = [
  {
    name: "Health Center",
    description: "Medical services, health consultations, first aid",
    phone: "+30 210 123 4567",
    building: "Building A, Room 105",
    hours: "Mon-Fri: 9:00-15:00",
  },
  {
    name: "Counseling Services",
    description:
      "Mental health support, stress management, personal counseling",
    phone: "+30 210 123 4567",
    building: "Building A, Room 105",
    hours: "Mon-Fri: 9:00-15:00",
  },
  {
    name: "IT Help Desk",
    description: "Technical support, WiFi issues, software assistance",
    phone: "+30 210 123 4567",
    building: "Building A, Room 105",
    hours: "Mon-Fri: 9:00-15:00",
  },
  {
    name: "Campus Security",
    description: "24/7 security, emergency response, lost & found",
    phone: "+30 210 123 4567",
    building: "Building A, Room 105",
    hours: "Mon-Fri: 9:00-15:00",
  },
  {
    name: "Printing Services",
    description: "Document printing, binding, copying services",
    phone: "+30 210 123 4567",
    building: "Building A, Room 105",
    hours: "Mon-Fri: 9:00-15:00",
  },
  {
    name: "Health Center",
    description: "Medical services, health consultations, first aid",
    phone: "+30 210 123 4567",
    building: "Building A, Room 105",
    hours: "Mon-Fri: 9:00-15:00",
  },
];

const otherServicesData = [
  {
    name: "Bookstore",
    description: "Textbooks, supplies, university merchandise",
    phone: "+30 210 123 4567",
    building: "Building A, Room 105",
    hours: "Mon-Fri: 9:00-15:00",
  },
  {
    name: "Mail Services",
    description: "Package delivery, postal services, mailbox rental",
    phone: "+30 210 123 4567",
    building: "Building A, Room 105",
    hours: "Mon-Fri: 9:00-15:00",
  },
  {
    name: "Transportation",
    description: "Campus shuttle, parking permits, bike rental",
    phone: "+30 210 123 4567",
    building: "Building A, Room 105",
    hours: "Mon-Fri: 9:00-15:00",
  },
];

const ServiceCard = ({ service }: { service: any }) => (
  <Card className="hover:shadow-md transition-shadow">
    <CardContent className="p-6">
      <h3 className="font-semibold text-foreground mb-2">{service.name}</h3>
      <p className="text-sm text-muted-foreground mb-4">
        {service.description}
      </p>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Phone className="h-4 w-4" />
          <span>{service.phone}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{service.building}</span>
        </div>
        {service.email && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            <span>{service.email}</span>
          </div>
        )}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{service.hours}</span>
        </div>
      </div>
    </CardContent>
  </Card>
);

export const Services = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-lg p-4 lg:p-6">
        <div className="flex items-center gap-3">
          <Briefcase className="h-6 w-6 dark:text-secondary" />
          <div>
            <h1 className="text-xl lg:text-2xl font-semibold dark:text-secondary">
              Other Services
            </h1>
            <p className="text-sm dark:text-secondary/70">
              Comprehensive support services for students
            </p>
          </div>
        </div>
      </div>

      {/* Services Tabs */}
      <Tabs defaultValue="offices" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="offices" className="flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            Offices
          </TabsTrigger>
          <TabsTrigger
            value="student-clubs"
            className="flex items-center gap-2"
          >
            <Users className="h-4 w-4" />
            Student Clubs
          </TabsTrigger>
          <TabsTrigger
            value="other-services"
            className="flex items-center gap-2"
          >
            <Heart className="h-4 w-4" />
            Other Services
          </TabsTrigger>
        </TabsList>

        <TabsContent value="offices" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {officesData.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="student-clubs" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {studentClubsData.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="other-services" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {otherServicesData.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
