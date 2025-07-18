import { BookOpen, Plus } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { motion } from "motion/react";

const cardData = [
  {
    title: "World-Class Faculty",
    description:
      "earn from renowned professors and industry experts who are leaders in their fields.",
  },
  {
    title: "Global Network",
    description:
      "Connect with alumni and students from over 100 countries worldwide.",
  },
  {
    title: "Modern Facilities",
    description:
      "State-of-the-art laboratories, libraries, and research centers equipped with latest technology.",
  },
  {
    title: "Career Support",
    description:
      "Comprehensive career services with 95% job placement rate within 6 months of graduation.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <motion.div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-4">
            Excellence in Education Since 1965
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-[800px] mx-auto px-4">
            For over 50 years, UniVerse has been at the forefront of higher
            education, fostering innovation, research, and academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {cardData?.map((data) => (
            <Card
              key={data.title}
              className="relative rounded-sm border-dashed border-primary/30 text-center hover:shadow-lg transition-shadow"
            >
              <Plus className="absolute -top-2 -left-2 h-4 w-4 text-primary" />
              <Plus className="absolute -top-2 -right-2 h-4 w-4 text-primary" />
              <Plus className="absolute -bottom-2 -left-2 h-4 w-4 text-primary" />
              <Plus className="absolute -bottom-2 -right-2 h-4 w-4 text-primary" />

              <CardHeader className="pb-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">
                  {data.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base">
                  {data.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
