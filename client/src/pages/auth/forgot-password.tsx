"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const server_base_api = import.meta.env.VITE_SERVER_BASE_URL;

export default function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [loading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const handleForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${server_base_api}/api/v1/forgot-password`,
        { email }
      );
      if (response.status === 200) {
        setIsLoading(false);
        navigate("/auth/verify/otp");
      }
    } catch (error: any) {
      setIsLoading(false);
      if (error?.response.status === 401) {
        setError(error.response.data.message);
        toast.warning("Create an account!!");
        setTimeout(() => {
          setError("");
        }, 2000);
        return;
      }
      if (error?.response.status === 403) {
        setError(error.response.data.details[0].message);
        toast.warning("Create an account!!");
        return;
      }

      toast.error("facing server issue!!");
    }
  };

  return (
    <form onSubmit={handleForm} className="h-2/4 flex items-center">
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <Label id="email">Email</Label>
          <Input
            className="py-6 text-lg"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@gmail.com"
          />
        </div>
        {error && <span className="text-rose-400">{error}</span>}
        <div className="flex flex-col gap-4">
          <Button type="submit" className="py-6 cursor-pointer">
            {loading ? "Sending" : "Send-OTP"}
          </Button>
        </div>
      </div>
    </form>
  );
}
