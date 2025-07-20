import { BookOpen, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./mode-toggle";

export const DashboardHeader = () => {
  return (
    <header className="flex items-center justify-between p-4 lg:px-6 bg-secondary border-b border-border">
      {/* Student Portal Title */}
      <a href="/" className="flex items-center space-x-2">
        <BookOpen className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
        <span className="text-lg font-bold">My-Uni</span>
      </a>

      {/* Header Actions */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="hidden sm:flex">
          <ModeToggle />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full shadow-sm border"
            >
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem>John Dow</DropdownMenuItem>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
