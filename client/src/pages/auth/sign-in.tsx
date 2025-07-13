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
import { BookOpen, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function SignInPage() {
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
              <CardTitle className="text-2xl">Welcome back!</CardTitle>
              <CardDescription>
                MyUni is most Lovable Palace for future lovers
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

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password *</Label>
                    <Link
                      to="/auth/forgot-password"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      placeholder="••••••••••"
                      value="{password}"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    >
                      <EyeOff className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  Login
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  {"Don't have an account? "}
                  <Link
                    to="/auth/signup"
                    className="text-foreground hover:underline"
                  >
                    Sign up
                  </Link>
                </div>
              </form>

              {/* Demo Credentials */}
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h4 className="font-medium mb-2">Demo Credentials:</h4>
                <div className="text-sm space-y-1">
                  <div>
                    <strong>Student:</strong> student@myuni.edu / student123
                  </div>
                  <div>
                    <strong>Admin:</strong> admin@myuni.edu / admin123
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
