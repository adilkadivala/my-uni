import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { handleVisibleToggle, InputHandler } from "@/lib/utils";
import AuthHeader from "@/components/auth-header";
import AuthFooter from "@/components/auth-footer";

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
  const [error, setError] = useState<UserData>({});
  const [isUserAgreed, setIsUserAgreed] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

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
      if (error?.response?.status === 406) {
        const errorMessage = error?.response.data?.error;
        toast.error(errorMessage);
        return;
      }
      toast.error("Sorry__ we are facing server error");
    }
  };

  return (
    <div className="w-full md:w-[75%] borde flex flex-col min-h-full h-full">
      <AuthHeader
        title="Welcome To Myuni"
        subtitle="Please Enter Your Details"
      />

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
              {error?.firstname && (
                <span className="text-rose-500">{error.firstname}</span>
              )}
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
              {error?.lastname && (
                <span className="text-rose-500">{error.lastname}</span>
              )}{" "}
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
            {error?.email && (
              <span className="text-rose-500">{error.email}</span>
            )}{" "}
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
            {error?.password && (
              <span className="text-rose-500">{error.password}</span>
            )}
            <Button
              className="text-sm absolute right-2 top-8 p-0"
              onClick={() => handleVisibleToggle(setShowPassword)}
              variant="ghost"
              type="button"
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </Button>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={isUserAgreed}
                onCheckedChange={(checked) => setIsUserAgreed(checked === true)}
              />
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
            <Button
              className="cursor-pointer rounded-sm py-6 font-bold"
              disabled={!isUserAgreed || isLoading}
            >
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
      <AuthFooter
        className="mt-7 flex items-end"
        bottomText="Already have an account ?"
        bottomLinkText="Sign-in"
        bottomLinkTo="/auth/sign-in"
      />
    </div>
  );
}
