"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
    <div className="w-full md:w-[75%] borde flex flex-col min-h-full h-full">
      <div className="h-1/4">
        <Link to="/" className="flex gap-2">
          <BookOpen />
          <span>My Uni</span>
        </Link>
      </div>

      <div className="py-6 md:py-20 h-1/4 leading-10 tracking-wide">
        <h1 className="text-3xl font-medium text-primary">Welcome To Myuni</h1>
        <p className="text-neutral-500 dark:text-neutral-400">
          Please Enter Your Details
        </p>
      </div>
      <form>
        <div className="flex flex-col gap-6">
          <div className="flex w-full gap-2">
            <div className="flex flex-col gap-3 w-1/2">
              <Label>First Name</Label>
              <Input className="py-6 text-lg" type="text" placeholder="john" />
            </div>
            <div className="flex flex-col gap-3 w-1/2">
              <Label>Last Name</Label>
              <Input className="py-6 text-lg" type="text" placeholder="dow" />
            </div>
          </div>

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
              className="text-sm absolute right-2 bottom-11 p-0"
              onClick={handleVisibleToggle}
              variant="ghost"
              type="button"
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </Button>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm leading-relaxed">
                By clicking this You'll agree our
                <Link
                  to="/terms"
                  className="border-b border-primary dark:border-primary"
                >
                  Terms & conditions
                </Link>
                and will follow our
                <Link
                  to="/privacy"
                  className="border-b border-primary dark:border-primary"
                >
                  privacy-policy
                </Link>
                .
              </Label>
            </div>
          </div>
          <div className="flex flex-col gap-4 my-10">
            <Button className="cursor-pointer rounded-sm py-6 font-bold">
              Sign-In
            </Button>
            <span className="text-center">Or</span>
            <Button variant="outline" className="cursor-pointer rounded-sm py-6 font-bold">
              Google
            </Button>
          </div>
        </div>
      </form>
      <div className="h-1/4 md:mt-11">
        <p>
          Already have an account ?{" "}
          <Link to="/auth/sign-in">
            <span className="border-b border-primary dark:border-primary">
              Sing-in
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
