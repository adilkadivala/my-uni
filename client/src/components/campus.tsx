import { Award, Calendar, ChevronRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Campus1, Campus2, Campus3, Campus4 } from "@/assets";

const Campus = () => {
  return (
    <section id="campus" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-4">
            More Than Just Academics
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-[800px] mx-auto px-4">
            Experience a vibrant campus community with endless opportunities for
            growth, friendship, and unforgettable memories.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    Student Organizations
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Join over 300 student clubs and organizations, from academic
                    societies to cultural groups.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    Sports & Recreation
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    State-of-the-art fitness centers, Olympic-sized pool, and
                    competitive sports teams.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    Events & Activities
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Year-round cultural events, guest lectures, concerts, and
                    festivals.
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="w-full sm:w-auto">
              Explore Campus Life
              <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 order-1 lg:order-2">
            <img
              src={Campus1}
              alt="Campus Life 1"
              className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-xl"
            />
            <img
              src={Campus2}
              alt="Campus Life 2"
              className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-xl mt-4 sm:mt-8"
            />
            <img
              src={Campus3}
              alt="Campus Life 3"
              className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-xl -mt-4 sm:-mt-8"
            />
            <img
              src={Campus4}
              alt="Campus Life 4"
              className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campus;
