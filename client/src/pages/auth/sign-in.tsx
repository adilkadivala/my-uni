"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { handleVisibleToggle, InputHandler } from "@/lib/utils";
import axios from "axios";
import { BookOpen, Eye, EyeOff, RotateCw } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

interface UserData {
  email?: string;
  password?: string;
}

const server_base_api = import.meta.env.VITE_SERVER_BASE_URL;

export default function SignIn() {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData>({
    email: "",
    password: "",
  });

  // form-handler

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${server_base_api}/api/v1/sign-in`,
        userData,
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        setIsLoading(false);

        setUserData({
          email: "",
          password: "",
        });
        toast.success("credentials matched!!");
      } else if (response.status === 401) {
        toast.error("User not Found !");
      } else if (response.status === 402) {
        toast.error("invalid credentials !");
      }
    } catch (error: any) {
      setIsLoading(false);

      console.log(error.message);
      toast.error("Sorry__ we are facing server error");
    }
  };

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
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Label id="email">Email</Label>
            <Input
              className="py-6 text-lg"
              type="email"
              name="email"
              value={userData?.email}
              onChange={(e) => InputHandler(e, setUserData)}
              placeholder="johndow@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-3 relative">
            <Label id="password">Password</Label>
            <Input
              className="py-6"
              name="password"
              value={userData?.password}
              onChange={(e) => InputHandler(e, setUserData)}
              type={showPassword ? "text" : "password"}
              placeholder="jhondow@1234"
            />
            <Button
              className="text-sm absolute right-2 bottom-5 p-0"
              onClick={() => handleVisibleToggle(setShowPassword)}
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
              {isLoading ? "Loading" : "Sign in"}
              {isLoading && <RotateCw className="animate-circle" />}
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
              Sign-up
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
