import { Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroImage, Student1, Student2, Student4 } from "@/assets";

const Hero = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 " />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm font-medium text-primary">
                  Leading Educational Excellence
                </span>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                  <span className="bg-gradient-to-r from-primary via-neutral-400 to-primary bg-clip-text text-transparent">
                    Elevate Your
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    Academic Journey
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-600 leading-relaxed max-w-full lg:max-w-[600px]">
                  Where visionary education meets transformative experiences.
                  Join our distinguished community of scholars, innovators, and
                  future leaders.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button
                size="lg"
                className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                Begin Your Journey
                <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 border-2 border-slate-200 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 bg-transparent w-full sm:w-auto"
              >
                Discover Programs
              </Button>
            </div>

            {/* Elegant Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8">
              <div className="text-center group">
                <div className="relative">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-neutral-200 to-primary dark:from-neutral-400 dark:to-primary/15 bg-clip-text text-transparent">
                    50K+
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                  Global Alumni
                </div>
              </div>
              <div className="text-center group">
                <div className="relative">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-neutral-200 to-primary dark:from-neutral-400 dark:to-primary/15 bg-clip-text text-transparent">
                    200+
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                  Academic Programs
                </div>
              </div>
              <div className="text-center group">
                <div className="relative">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-neutral-200 to-primary dark:from-neutral-400 dark:to-primary/15 bg-clip-text text-transparent">
                    95%
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                  Career Success
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 lg:pl-8">
            {/* Main Image */}
            <div className="relative">
              {/* <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl sm:rounded-3xl blur-2xl opacity-30" /> */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-1 sm:p-2 shadow-xl sm:shadow-2xl border border-white/20">
                <img
                  src={HeroImage}
                  alt="Distinguished Campus"
                  className="w-full h-auto rounded-lg sm:rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Floating Achievement Card */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 bg-white/95 backdrop-blur-sm p-3 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-white/20 max-w-[200px] sm:max-w-xs">
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="h-8 w-8 sm:h-14 sm:w-14 bg-gradient-to-br from-primary to-primary/80 rounded-lg sm:rounded-2xl flex items-center justify-center shadow-lg">
                  <Award className="h-4 w-4 sm:h-7 sm:w-7 text-white dark:text-secondary" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-bold text-slate-900">
                    World Ranked #1
                  </div>
                  <div className="text-xs sm:text-sm text-primary-600">
                    QS Global Rankings 2024
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Student Card */}
            <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 bg-white/95 backdrop-blur-sm p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-white/20">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex -space-x-1 sm:-space-x-2">
                  <img
                    src={Student1}
                    alt="Student"
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white"
                  />
                  <img
                    src={Student2}
                    alt="Student"
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white"
                  />
                  <img
                    src={Student4}
                    alt="Student"
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white"
                  />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-900">
                    2,500+ Active
                  </div>
                  <div className="text-xs text-primary-600">
                    Students Online
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
