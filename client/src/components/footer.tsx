import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

type SectionsItem = {
  href: string;
  title: string;
};

const Sectionsitem: SectionsItem[] = [
  {
    href: "#about",
    title: "About",
  },
  {
    href: "#programs",
    title: "Programs",
  },
  {
    href: "#campus",
    title: "Campus",
  },
  {
    href: "#admissions",
    title: "Admissions",
  },
];

const Footer = () => {
  return (
    <footer className="border-t py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-lg flex items-center justify-center">
                <BookOpen className="h-3 w-3 sm:h-5 sm:w-5 text-primary-foreground" />
              </div>
              <span className="text-lg sm:text-xl font-bold">MyUni</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">
              Empowering education through innovative technology and seamless
              user experiences.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Sections
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              {Sectionsitem?.map((item) => (
                <li>
                  <a
                    href={item.href}
                    className="text-sm hover:text-foreground transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Portal
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link
                  to="#about"
                  className="text-sm hover:text-foreground transition-colors"
                >
                  Student Portal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Legal
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link
                  to="#privacy"
                  className="text-sm hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm hover:text-foreground transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MyUni. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
