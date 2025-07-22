import { z } from "zod";

export const verifiedSignUpField = z.object({
  firstname: z
    .string()
    .min(3, { message: "first name atleast should be 3 char." })
    .max(10, { message: "first name should not long then 10 char." }),
  lastname: z
    .string()
    .min(3, { message: "last name atleast should be 3 char." })
    .max(10, { message: "last name should not long then 10 char." }),
  email: z.email(),
  password: z
    .string()
    .min(5, { message: "password atleast should long then 5 char." })
    .max(100, { message: "password should not long then 100 char." }),

  role: z.enum(["STUDENT", "ADMIN"]).optional(),
});

export const verifiedSignInField = verifiedSignUpField.pick({
  email: true,
  password: true,
});

export const verifiedForgotPassword = verifiedSignUpField.pick({
  email: true,
});

export const verifiedOTP = z.object({
  otp: z.string().length(6, { message: "OTP must be 6 digits" }),
});

type SignUpFileds = z.infer<typeof verifiedSignUpField>;
type SignInFileds = z.infer<typeof verifiedSignInField>;
type ForgotPasswordFileds = z.infer<typeof verifiedForgotPassword>;
type OTPFileds = z.infer<typeof verifiedOTP>;
