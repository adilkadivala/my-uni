import { CampusMaps } from "@/components/campus-map";
import { Help } from "@/components/help";
import { ServiceCard } from "@/components/service-card";
import { TodaysHighlights } from "@/components/todays-highlights";

import {
  UtensilsCrossed,
  BookOpen,
  Users,
  Clipboard,
  Briefcase,
  Settings,
} from "lucide-react";

interface ServiceCardProps {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  buttonText: string;
  buttonVariant?: "default" | "outline" | "secondary";
  className?: string;
}

const serviceCards: ServiceCardProps[] = [
  {
    id: 1,
    icon: UtensilsCrossed,
    title: "Restaurant",
    description: "Check today's menu and weekly specials",
    buttonText: "Today's special",
    buttonVariant: "outline" as const,
  },
  {
    id: 2,
    icon: BookOpen,
    title: "Library",
    description: "Hours, resources, and study spaces",
    buttonText: "open until 08:00 pm",
    buttonVariant: "secondary" as const,
  },
  {
    id: 3,
    icon: Users,
    title: "Academic Personnel",
    description: "Faculty directory and contact info",
    buttonText: "Dir faculty",
    buttonVariant: "outline" as const,
  },
  {
    id: 4,
    icon: Clipboard,
    title: "Freshmen Guide",
    description: "Online info for new students",
    buttonText: "new student",
    buttonVariant: "outline" as const,
  },
  {
    id: 5,
    icon: Briefcase,
    title: "Other services",
    description: "Offices, clubs, and support services",
    buttonText: "200 services",
    buttonVariant: "outline" as const,
  },
  {
    id: 6,
    icon: Settings,
    title: "Settings",
    description: "Manage your account and preferences",
    buttonText: "profile",
    buttonVariant: "outline" as const,
  },
];

const currentDate = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row  items-center p-4 lg:p-6 border rounded-sm bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 justify-between ">
        <div>
          <h1 className="text-xl lg:text-2xl font-semibold dark:text-secondary mb-1">
            Welcome Back, John !!
          </h1>
          <p className="text-sm dark:text-secondary/75">
            Here's what's happening with your studies today.
          </p>
        </div>
        <div>
          <p className="text-sm  dark:text-secondary/75 font-medium mt-2">
            {currentDate}
          </p>
        </div>
      </div>
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {serviceCards.map((service) => (
          <ServiceCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
            buttonText={service.buttonText}
            buttonVariant={service.buttonVariant}
          />
        ))}
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <TodaysHighlights />
        <CampusMaps />
      </div>

      {/* Emergency Contact */}
      <Help
        title="Emergency Contact"
        helplineContact="Campus Security: +90 210 123 4583 (24/7)"
        helplineEmail="Email: emergencyhelp@gmail.com"
      />
    </>
  );
};

export default Dashboard;
