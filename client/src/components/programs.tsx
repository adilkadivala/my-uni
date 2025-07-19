import { ChevronRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Program1, Program2, Program3 } from "@/assets";

type Program = {
  title: string;
  description: string;
  image: string;
};

const programs: Program[] = [
  {
    title: "Department of Economics",
    description:
      "Explore macroeconomics, microeconomics, and econometrics with real-world applications and research opportunities.",
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
    image: Program3,
  },
  {
    title: "International and European Studies",
    description:
      "Understand global political systems, diplomacy, and international law with a focus on European affairs.",
    image: Program1,
  },
];

const spanStyles = [
  "md:col-span-3", // 0
  "md:col-span-3", // 1
  "md:col-span-4", // 2
  "md:col-span-2", // 3
  "md:col-span-3", // 4
  "md:col-span-3", // 5
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

        {/* Bento Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-6 gap-2">
          {programs.map((program, idx) => (
            <div
              key={program.title}
              className={cn("p-1 rounded-lg", spanStyles[idx], "h-full")}
            >
              <Card className="group hover:shadow-lg transition-shadow h-full">
                <CardHeader className="pb-4">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-40 sm:h-44 object-cover rounded-lg mb-3 sm:mb-4"
                  />
                  <CardTitle className="text-lg sm:text-xl">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-between h-full">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
