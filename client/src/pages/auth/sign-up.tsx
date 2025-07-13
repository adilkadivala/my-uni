"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { BookOpen, Eye } from "lucide-react";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  //   const handleSubmit = async (e: React.FormEvent) => {
  //     e.preventDefault();
  //     setError("");

  //     if (!agreedToTerms) {
  //       setError("Please agree to the terms and conditions");
  //       return;
  //     }

  //     setIsLoading(true);

  //     try {
  //       // Simulate API call
  //       await new Promise((resolve) => setTimeout(resolve, 1000));

  //       // For demo purposes, show success message
  //       alert(
  //         "Account created successfully! Please use the demo credentials to sign in."
  //       );
  //     } catch (err) {
  //       setError("An error occurred. Please try again.");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   const handleInputChange = (field: string, value: string) => {
  //     setFormData((prev) => ({ ...prev, [field]: value }));
  //   };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex min-h-[calc(100vh-80px)]">
        {/* Left side - Image */}
        <div className="hidden lg:flex lg:w-1/2 bg-muted items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="aspect-square bg-muted-foreground/10 rounded-lg flex items-center justify-center">
              <BookOpen className="h-24 w-24 text-muted-foreground/50" />
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="flex-1 flex items-center justify-center p-8">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Welcome!</CardTitle>
              <CardDescription>
                Let tell us your future plans, we'll together build it..
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">User name</Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Jhon Dow"
                    value="{formData.username}"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jhondow@gmail.com"
                    value="{formData.email}"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password *</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      //   type={showPassword ? "text" : "password"}
                      placeholder="••••••••••"
                      value="{formData.password}"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  Create
                </Button>

                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm leading-relaxed">
                    By clicking this You'll agree our Terms & conditions, and
                    will follow our privacy-policy.
                  </Label>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link
                    to="/auth/signin"
                    className="text-foreground hover:underline"
                  >
                    Sign In
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
