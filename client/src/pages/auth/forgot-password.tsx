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
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
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
            <p className="text-sm text-muted-foreground">Demo OTP: 358952</p>
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
            to="/auth/sign-in"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to Sign In
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
