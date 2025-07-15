"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState<boolean>(true);

  function handleVisibleToggle() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="w-full md:w-[75%] borde flex flex-col min-h-full">
      <div className="h-1/4">
        <Link to="/" className="flex gap-2">
          <BookOpen />
          <span>My Uni</span>
        </Link>
      </div>

      <div className="py-6 md:py-20  h-1/4 leading-10 tracking-wide">
        <h1 className="text-3xl font-medium text-primary">Welcome Back</h1>
        <p className="text-neutral-500 dark:text-neutral-400">
          Please Enter Your Details
        </p>
      </div>
      <form>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Label>Email</Label>
            <Input
              className="py-6 text-lg"
              type="email"
              placeholder="johndow@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-3 relative">
            <Label>Password</Label>
            <Input
              className="py-6"
              type={showPassword ? "text" : "password"}
              placeholder="jhondow@1234"
            />
            <Button
              className="text-sm absolute right-2 bottom-5 p-0"
              onClick={handleVisibleToggle}
              variant="ghost"
              type="button"
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </Button>

            <Link to="/auth/forgot-password">
              <span className="absolute right-0 -bottom-6 border-b border-primary dark:border-primary">
                forgot password ?
              </span>
            </Link>
          </div>
          <div className="flex flex-col gap-4 my-10">
            <Button className="cursor-pointer rounded-sm py-6 font-bold">
              Sign-In
            </Button>
            <span className="text-center">Or</span>
            <Button
              variant="outline"
              className="cursor-pointer rounded-sm py-6 font-bold"
            >
              Google
            </Button>
          </div>
        </div>
      </form>
      <div className="h-1/4  md:mt-32">
        <p>
          Don't have an account ?{" "}
          <Link to="/auth/sign-up">
            <span className="border-b border-primary dark:border-primary">
              Sing-up
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
