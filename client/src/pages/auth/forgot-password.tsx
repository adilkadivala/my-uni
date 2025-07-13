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
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function ForgotPasswordPage() {
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
              <CardTitle className="text-2xl">Reset Password</CardTitle>
              <CardDescription>
                As Our Future Plan, You are playing main Role! keep Rocking..
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jhondow@gmail.com"
                    value="{email}"
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send OTP
                </Button>
              </form>

              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="otp">OTP</Label>
                  <Input id="otp" type="text" placeholder="358952" required />
                  <p className="text-sm text-muted-foreground">
                    Demo OTP: 358952
                  </p>
                </div>

                <Button type="submit" className="w-full">
                  Check
                </Button>

                <Button type="button" variant="outline" className="w-full">
                  Back to Email
                </Button>
              </form>

              <div className="mt-4 text-center">
                <Link
                  to="/auth/signin"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Back to Sign In
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
