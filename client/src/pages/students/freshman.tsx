import {
  UserCheck,
  CheckCircle,
  Users,
  Home,
  Clock,
  UserSquare,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Help } from "@/components/help";

interface FreshmanSections {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  items: string[];
}

const sections: FreshmanSections[] = [
  {
    icon: CheckCircle,
    title: "Registration & Enrollment",
    items: [
      "Complete your online registration within the first week",
      "Submit all required documents to the Registrar's Office",
      "Attend the mandatory orientation session",
      "Get your student ID card from Student Services",
      "Set up your university email account",
    ],
  },
  {
    icon: Users,
    title: "Campus Life",
    items: [
      "Join student clubs and organizations",
      "Attend campus events and activities",
      "Use the library and study spaces effectively",
      "Get to know your dormitory if you're living on campus",
      "Explore dining options and meal plans",
    ],
  },
  {
    icon: Home,
    title: "Boarding, Housing, HealthCare",
    items: [
      "Supporting documents for boarding application",
      "Supporting documents for housing application",
      "Government gazette for housing",
      "Income thresholds",
      "Government gazette for boarding",
    ],
  },
  {
    icon: Clock,
    title: "Important Deadlines",
    items: [
      "Meet with your academic advisor to plan your course schedule",
      "Understand the credit system and graduation requirements",
      "Learn about the grading system and GPA calculation",
      "Familiarize yourself with the academic calendar",
      "Know the add/drop deadlines for courses",
    ],
  },
  {
    icon: UserSquare,
    title: "Academic Requirements",
    items: [
      "Meet with your academic advisor to plan your course schedule",
      "Understand the credit system and graduation requirements",
      "Learn about the grading system and GPA calculation",
      "Familiarize yourself with the academic calendar",
      "Know the add/drop deadlines for courses",
    ],
  },
  {
    icon: UserCheck,
    title: "Institutional account",
    items: [
      "Meet with your academic advisor to plan your course schedule",
      "Understand the credit system and graduation requirements",
      "Learn about the grading system and GPA calculation",
      "Familiarize yourself with the academic calendar",
      "Know the add/drop deadlines for courses",
    ],
  },
];

export const FreshmenGuide = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-lg p-4 lg:p-6">
        <div className="flex items-center gap-3">
          <UserCheck className="h-6 w-6 dark:text-secondary" />
          <div>
            <h1 className="text-xl lg:text-2xl font-semibold dark:text-secondary">
              Freshmen Guide
            </h1>
            <p className="text-sm dark:text-secondary/70">
              Welcome to University! Here's everything you need to know to get
              started.
            </p>
          </div>
        </div>
      </div>

      {/* Guide Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Need Help Section */}
      <Help
        title="Need Help ?"
        helplineEmail="Academic Advising: email : helpmyuni@gmail.com"
        helplineContact="Address: Building B, Room 101"
      />
    </div>
  );
};
