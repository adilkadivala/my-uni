"use client";

import AuthFooter from "@/components/auth-footer";
import AuthHeader from "@/components/auth-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { handleVisibleToggle, InputHandler } from "@/lib/utils";
import axios from "axios";
import { Eye, EyeOff, RotateCw } from "lucide-react";
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
  const [error, setError] = useState<UserData>({});
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
        return;
      }
    } catch (error: any) {
      setIsLoading(false);

      if (error?.response?.status === 403) {
        const errorMessage = error?.response.data?.details;

        const errorInInput: UserData = {};

        errorMessage?.forEach((error: any) => {
          const field = error.field as keyof UserData;
          errorInInput[field] = error.message;
        });

        setError(errorInInput);

        // clear error
        setTimeout(() => {
          setError({});
        }, 2000);

        return;
      }
      if (error?.response?.status === 401) {
        const errorMessage = error?.response.data?.message;
        toast.error(errorMessage);
        return;
      }
      if (error?.response?.status === 402) {
        const errorMessage = error?.response.data?.message;
        toast.error(errorMessage);
        return;
      }
      toast.error("Sorry__ we are facing server error");
    }
  };

  return (
    <div className="w-full md:w-[75%] borde flex flex-col min-h-full">
      <AuthHeader title="Welcome Back" subtitle="Please Enter Your Details" />
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
            {error?.email && (
              <span className="text-rose-500">{error.email}</span>
            )}
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

            {error?.password && (
              <span className="text-rose-500">{error.password}</span>
            )}
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
      <AuthFooter
        className="h-[10%] mt-14 flex items-end md:mt-32"
        bottomText="Don't have an account ? "
        bottomLinkText="Sign-up"
        bottomLinkTo="/auth/sign-up"
      />
    </div>
  );
}
