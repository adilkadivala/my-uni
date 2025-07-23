import { BookOpen } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

const VerifyOtpLayout = () => {
  return (
    <div className="w-full md:w-[75%] borde flex flex-col min-h-full h-full">
      <div>
        <Link to="/" className="flex gap-2">
          <BookOpen />
          <span className="font-bold">My Uni</span>
        </Link>
      </div>

      <div className="py-6 md:py-20 h-1/4 leading-10 tracking-wide">
        <h1 className="text-3xl font-medium text-primary">Reset Password</h1>
        <p className="text-neutral-500 dark:text-neutral-400">
          <span>Please Enter Your Email</span>
        </p>
      </div>
      <Outlet />
      <div className="h-[10%] mt-14 flex items-end md:mt-32">
        <p>
          Don't have an account ?{" "}
          <Link to="/auth/sign-up">
            <span className="border-b border-primary dark:border-primary">
              Sign-up
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default VerifyOtpLayout;
