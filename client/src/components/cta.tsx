import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const CTA = () => {
  return (
    <section
      id="admissions"
      className="py-12 sm:py-16 md:py-20 bg-primary text-primary-foreground"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-base sm:text-lg md:text-xl opacity-90 px-4">
            Join the next generation of leaders, innovators, and changemakers.
            Your future starts here at UniVerse.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button
              size="lg"
              variant="secondary"
              className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 w-full sm:w-auto"
            >
              Apply Now
              <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent w-full sm:w-auto"
            >
              Schedule a Visit
            </Button>
          </div>

          <div className="pt-6 sm:pt-8 px-4">
            <p className="text-xs sm:text-sm opacity-75 mb-3 sm:mb-4">
              Application Deadlines:
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center text-xs sm:text-sm space-y-1 sm:space-y-0">
              <div>Early Decision: November 15</div>
              <div className="hidden sm:block">•</div>
              <div>Regular Decision: January 15</div>
              <div className="hidden sm:block">•</div>
              <div>Transfer Students: March 1</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
