"use client";

import { BookOpen, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { useState } from "react";
import { Link } from "react-router-dom";

type NavItems = {
  href: string;
  title: string;
};

const navItems: NavItems[] = [
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

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            <span className="text-lg sm:text-2xl font-bold">My-Uni</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems?.map((item) => (
              <a
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.title}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <ModeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="hidden lg:inline-flex text-xs lg:text-sm"
              asChild
            >
              <Link to="/student/dashboard">Student Portal</Link>
            </Button>
            <Button
              size="sm"
              className="text-xs lg:text-sm px-3 lg:px-4"
              asChild
            >
              <Link to="/auth/sign-in">Login</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-background/95 backdrop-blur">
            <nav className="flex flex-col space-y-4 px-4 py-6">
              {navItems?.map((item) => (
                <a
                  href={item.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.title}
                </a>
              ))}

              <div className="flex flex-col space-y-3 pt-4 border-t">
                <Button variant="ghost" size="sm" className="justify-start">
                  Student Portal
                </Button>
                <Button
                  size="sm"
                  className="text-xs lg:text-sm px-3 lg:px-4"
                  asChild
                >
                  <Link to="/auth/sign-in">Login</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
