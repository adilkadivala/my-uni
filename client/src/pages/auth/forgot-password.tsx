import AuthFooter from "@/components/auth-footer";
import AuthHeader from "@/components/auth-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

const server_base_api = import.meta.env.VITE_SERVER_BASE_URL;
const inputCount = 6;

export default function ForgotPasswordAndOTP() {
  const [step, setStep] = useState<"email" | "otp" | "update-password">(
    "email"
  );

  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState<string[]>(new Array(inputCount).fill(""));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Email submit: send OTP to server
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        `${server_base_api}/api/v1/forgot-password`,
        { email }
      );

      if (response.status === 200) {
        setStep("otp");
        toast.success("OTP sent to your email!");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to send OTP");
      toast.error(error || "Server error");
    } finally {
      setLoading(false);
    }
  };

  // OTP submit: verify OTP with server
  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const otpString = otp.join("");
    if (otpString.length !== inputCount) {
      setError("Please enter complete OTP");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${server_base_api}/api/v1/verify-otp`,
        {
          email,
          otp: Number(otpString),
        }
      );
      if (response.status === 200) {
        toast.success("OTP Verified! You can now reset your password.");
        setStep("update-password");
        setPassword("");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Invalid OTP");
      toast.error(error || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  // OTP Successfully matched: UpdatePassword
  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.put(
        `${server_base_api}/api/v1/update-password`,
        {
          email,
          password,
        }
      );
      if (response.status === 200) {
        toast.success("Password updated successfully!!");
      }
    } catch (err: any) {
      setError(err.response?.data?.message);
      toast.error(err);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full md:w-[75%] borde flex flex-col min-h-full h-full">
      {step === "email" && (
        <>
          <AuthHeader
            title="Enter Your Email"
            subtitle="We'll send OTP to your email !!"
          />

          <form
            onSubmit={handleEmailSubmit}
            className="h-2/4 flex items-center"
          >
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  className="py-6 text-lg"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@gmail.com"
                />
              </div>

              {error && <span className="text-rose-400">{error}</span>}

              <div className="flex flex-col gap-4">
                <Button
                  type="submit"
                  className="py-6 cursor-pointer"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send OTP"}
                </Button>
              </div>
            </div>
          </form>
        </>
      )}

      {step === "otp" && (
        <>
          <AuthHeader
            title="Enter OTP"
            subtitle={`We've sent OTP to your email: ${email}`}
          />

          <form className="h-2/4 flex items-center" onSubmit={handleOtpSubmit}>
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <Label>OTP</Label>
                <div className="flex w-full gap-1.5 ">
                  {new Array(inputCount).fill("").map((_, index) => (
                    <Input
                      key={index}
                      type="text"
                      value={otp[index]}
                      onChange={(e) => {
                        const val = e.target.value;
                        // Only accept digits and max length 1
                        if (/^\d?$/.test(val)) {
                          const newOtp = [...otp];
                          newOtp[index] = val;
                          setOtp(newOtp);
                        }
                      }}
                      inputMode="numeric"
                      autoComplete="one-time-code"
                      placeholder="9"
                      className="text-center p-7 rounded-sm"
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Button
                  type="submit"
                  className="cursor-pointer rounded-sm py-6 font-bold"
                >
                  {loading ? "Checking" : "Check"}
                </Button>
              </div>
            </div>
          </form>
        </>
      )}

      {step === "update-password" && (
        <>
          <AuthHeader
            title="Enter Your Email"
            subtitle="We'll send OTP to your email !!"
          />

          <form
            onSubmit={handleUpdatePassword}
            className="h-2/4 flex items-center"
          >
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <Label htmlFor="password">New Password</Label>
                <Input
                  id="password"
                  className="py-6 text-lg"
                  type="email"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="john@dow"
                />
              </div>
              {error && <span className="text-rose-400">{error}</span>}

              <div className="flex flex-col gap-4">
                <Button
                  type="submit"
                  className="py-6 cursor-pointer"
                  disabled={loading}
                >
                  {loading ? "Updating..." : "Update"}
                </Button>
              </div>
            </div>
          </form>
        </>
      )}
      <AuthFooter
        className="h-[10%] mt-14 flex items-end md:mt-20"
        bottomLinkTo="/auth/sign-up"
        bottomLinkText="Sign-up"
        bottomText=" Don't have an account ?"
      />
    </div>
  );
}
