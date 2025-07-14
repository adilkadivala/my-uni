import { BookOpen } from "lucide-react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex lg:w-1/2 bg-muted items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="aspect-square bg-muted-foreground/10 rounded-lg flex items-center justify-center">
            <BookOpen className="h-24 w-24 text-muted-foreground/50" />
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
