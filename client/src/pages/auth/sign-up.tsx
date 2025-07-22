"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { handleVisibleToggle, InputHandler } from "@/lib/utils";

interface UserData {
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
}

const server_base_api = import.meta.env.VITE_SERVER_BASE_URL;

export default function SignIn() {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  // handle for password visible icon

  // form-handler

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${server_base_api}/api/v1/sign-up`,
        userData
      );
      if (response.status === 200) {
        setIsLoading(false);
        setUserData({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
        });
        toast.success("account created!!");
      }
    } catch (error: any) {
      setIsLoading(false);
      console.log(error.message);
      toast.error("Sorry__ we are facing server error");
    }
  };

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
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <div className="flex w-full gap-2">
            <div className="flex flex-col gap-3 w-1/2">
              <Label id="firstname">First Name</Label>
              <Input
                className="py-6 text-lg"
                type="text"
                placeholder="john"
                name="firstname"
                value={userData?.firstname}
                onChange={(e) => InputHandler(e, setUserData)}
              />
            </div>
            <div className="flex flex-col gap-3 w-1/2">
              <Label id="lastname">Last Name</Label>
              <Input
                className="py-6 text-lg"
                type="text"
                placeholder="dow"
                name="lastname"
                value={userData?.lastname}
                onChange={(e) => InputHandler(e, setUserData)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Label id="email">Email</Label>
            <Input
              className="py-6 text-lg"
              type="email"
              placeholder="johndow@gmail.com"
              name="email"
              value={userData?.email}
              onChange={(e) => InputHandler(e, setUserData)}
            />
          </div>
          <div className="flex flex-col gap-3 relative">
            <Label id="password">Password</Label>
            <Input
              className="py-6"
              type={showPassword ? "text" : "password"}
              placeholder="jhondow@1234"
              name="password"
              value={userData?.password}
              onChange={(e) => InputHandler(e, setUserData)}
            />
            <Button
              className="text-sm absolute right-2 top-8 p-0"
              onClick={() => handleVisibleToggle(setShowPassword)}
              variant="ghost"
              type="button"
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </Button>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm inline-block">
                By clicking this You'll agree our{" "}
                <Link
                  to="/terms"
                  className="border-b border-primary dark:border-primary"
                >
                  Terms & conditions{" "}
                </Link>
                and will follow our{" "}
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
              {isLoading ? "Loading" : "Sign-Up"}
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
      <div className="h-1/4 md:mt-11">
        <p>
          Already have an account ?{" "}
          <Link to="/auth/sign-in">
            <span className="border-b border-primary dark:border-primary">
              Sign-in
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
