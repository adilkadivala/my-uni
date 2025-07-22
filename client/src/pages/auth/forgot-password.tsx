"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
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
      <form className="h-2/4 flex items-center">
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Label>Email</Label>
            <Input
              className="py-6 text-lg"
              type="email"
              placeholder="john@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Button
              type="button"
              className="py-6 cursor-pointer"
              onClick={() => navigate("/auth/verify-user")}
            >
              Send-OTP
            </Button>
          </div>
        </div>
      </form>
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
}
