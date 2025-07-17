import { ChevronRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Program1, Program2, Program3 } from "@/assets";

const programs = [
  {
    title: "Department of Economics",
    description:
      "Explore macroeconomics, microeconomics, and econometrics with real-world applications and research opportunities.",
    badge: "Popular",
    badgeVariant: "default",
    image: Program1,
  },
  {
    title: "Educational & Social Policy",
    description:
      "Study education systems, policy analysis, and societal development to influence future generations.",
    image: Program2,
  },
  {
    title: "Accounting & Finance",
    description:
      "Gain in-depth knowledge of financial reporting, investment strategies, and corporate accounting.",
    image: Program3,
  },
  {
    title: "Music Science & Arts",
    description:
      "Merge creative expression with academic insight through music theory, performance, and digital arts.",
    image: Program2,
  },
  {
    title: "Business Administration",
    description:
      "Learn management principles, leadership skills, and organizational strategy with hands-on projects.",
    badge: "MBA",
    badgeVariant: "default",
    image: Program3,
  },
  {
    title: "International and European Studies",
    description:
      "Understand global political systems, diplomacy, and international law with a focus on European affairs.",
    badge: "New",
    badgeVariant: "destructive",
    image: Program1,
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-4">
            Discover Your Path
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-[800px] mx-auto px-4">
            Choose from over 200 undergraduate and graduate programs across
            diverse fields of study.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {programs.map((program, idx) => (
            <Card key={idx} className="group hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 sm:h-52 object-cover rounded-lg mb-3 sm:mb-4"
                />
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <CardTitle className="text-lg sm:text-xl">
                    {program.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-sm sm:text-base">
                  {program.description}
                </CardDescription>
                <Button
                  variant="ghost"
                  className="group-hover:text-primary w-full sm:w-auto text-sm"
                >
                  Learn More <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
