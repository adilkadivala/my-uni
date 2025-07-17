"use client";

import { BookOpen, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            <span className="text-lg sm:text-2xl font-bold">My-Uni</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              to="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              to="#programs"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Programs
            </Link>
            <Link
              to="#campus"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Campus Life
            </Link>
            <Link
              to="#admissions"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Admissions
            </Link>
            <Link
              to="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <ModeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="hidden lg:inline-flex text-xs lg:text-sm"
            >
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

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <ModeToggle />
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
              <Link
                to="#about"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="#programs"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Programs
              </Link>
              <Link
                to="#campus"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Campus Life
              </Link>
              <Link
                to="#admissions"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Admissions
              </Link>
              <Link
                to="#contact"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
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
