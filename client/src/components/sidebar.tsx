import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  UtensilsCrossed,
  BookOpen,
  Users,
  UserCheck,
  Briefcase,
  MapPin,
  Settings,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface SidebarItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  id: string;
  href: string;
}

const sidebarItems: SidebarItem[] = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    id: "dashboard",
    href: "/student/dashboard",
  },
  {
    icon: UtensilsCrossed,
    label: "Restaurant",
    id: "restaurant",
    href: "/student/restaurant",
  },
  {
    icon: BookOpen,
    label: "Library",
    id: "library",
    href: "/student/library",
  },
  {
    icon: Users,
    label: "Academic Personnel",
    id: "academic",
    href: "/student/academic-personnel",
  },
  {
    icon: UserCheck,
    label: "Fresh Man",
    id: "freshmen",
    href: "/student/freshmenguide",
  },
  {
    icon: Briefcase,
    label: "Services",
    id: "services",
    href: "/student/services",
  },
  { icon: MapPin, label: "Map", id: "map", href: "/student/map" },
  {
    icon: Settings,
    label: "Settings",
    id: "settings",
    href: "/student/settings",
  },
];

interface StudentPortalSidebarProps {
  activeItem: string;
  onItemSelect: (id: string) => void;
}

export const StudentPortalSidebar = ({
  activeItem,
  onItemSelect,
}: StudentPortalSidebarProps) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);

  // Set default states based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // Desktop: default open
        setIsMobileOpen(false);
      } else {
        // Mobile: default closed
        setIsMobileOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);
  const toggleDesktop = () => setIsDesktopCollapsed(!isDesktopCollapsed);

  return (
    <>
      <button
        onClick={toggleMobile}
        className="lg:hidden absolute top-4 right-15 z-50 p-2 bg-card rounded-lg "
      >
        {isMobileOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </button>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={toggleMobile}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed lg:static inset-y-0 left-0 z-40 bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out",
          // Mobile behavior
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          // Desktop width behavior
          isDesktopCollapsed ? "lg:w-16" : "lg:w-64",
          // Mobile width
          "w-64"
        )}
      >
        <div className="flex flex-col h-full relative">
          {/* Desktop Collapse Button */}

          <div className="hidden border rounded-full hover:bg-secondary lg:flex justify-end p-1 absolute -right-4 -top-5">
            <button onClick={toggleDesktop} className="p-1 rounded-lg ">
              {isDesktopCollapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2.5 py-6 space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;

              return (
                <Link
                  to={item.href}
                  key={item.id}
                  onClick={() => {
                    onItemSelect(item.id);
                    setIsMobileOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center rounded-lg text-sm font-medium transition-colors cursor-pointer",
                    isDesktopCollapsed
                      ? "lg:justify-center lg:px-0 lg:py-3"
                      : "gap-3 px-3 py-2.5",
                    isActive
                      ? "bg-primary/10 text-sidebar-active"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                  title={isDesktopCollapsed ? item.label : undefined}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  <span
                    className={cn(
                      "transition-all duration-300",
                      isDesktopCollapsed ? "lg:hidden" : "block"
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};
