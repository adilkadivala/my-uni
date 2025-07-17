"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [step, setStep] = useState<"email" | "otp">("email");

  return (
    <div className="w-full md:w-[75%] borde flex flex-col min-h-full h-full">
      <div>
        <Link to="/" className="flex gap-2">
          <BookOpen />
          <span>My Uni</span>
        </Link>
      </div>

      <div className="py-6 md:py-20 h-1/4 leading-10 tracking-wide">
        <h1 className="text-3xl font-medium text-primary">Reset Password</h1>
        <p className="text-neutral-500 dark:text-neutral-400">
          {step === "email" ? (
            <span>Please Enter Your Email</span>
          ) : (
            <span>
              We have sent an OTP to your email{" "}
              <span className="text-primary">johndow@gmail.com</span>
            </span>
          )}
        </p>
      </div>
      <form className="h-2/4 flex items-center">
        <div className="flex-1 flex flex-col gap-6">
          {step === "email" ? (
            <>
              <div className="flex flex-col gap-3">
                <Label>Email</Label>
                <Input
                  className="py-6 text-lg"
                  type="email"
                  placeholder="john@gmail.com"
                />
              </div>
              <div className="flex flex-col gap-4">
                <Button type="button" onClick={() => setStep("otp")}>
                  Send-OTP
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-3">
                <Label>OTP</Label>
                <div className="flex w-full gap-1.5 ">
                  <Input
                    type="text"
                    placeholder="4"
                    className="text-center py-7 rounded-sm rounded-e-none"
                  />
                  <Input
                    type="text"
                    placeholder="4"
                    className="text-center py-7 rounded-sm rounded-e-none"
                  />
                  <Input
                    type="text"
                    placeholder="4"
                    className="text-center py-7 rounded-sm rounded-e-none"
                  />
                  <Input
                    type="text"
                    placeholder="4"
                    className="text-center py-7 rounded-sm rounded-s-none"
                  />
                  <Input
                    type="text"
                    placeholder="4"
                    className="text-center py-7 rounded-sm rounded-s-none"
                  />
                  <Input
                    type="text"
                    placeholder="4"
                    className="text-center py-7 rounded-sm rounded-s-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Button className="cursor-pointer rounded-sm py-6 font-bold">
                  Check
                </Button>
              </div>
            </>
          )}
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
