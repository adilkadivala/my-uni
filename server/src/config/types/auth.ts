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
  email: z.email({ message: "Please enter a valid email address" }),
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

export const verifiedOTP = verifiedSignUpField
  .pick({
    email: true,
  })
  .extend({
    otp: z
      .number()
      .min(100000, { message: "OTP must be 6 digits" })
      .max(999999, { message: "OTP must be 6 digits" }),
  });

export const verifyPassword = verifiedSignUpField.pick({
  email:true,
  password: true,
});

type SignUpFileds = z.infer<typeof verifiedSignUpField>;
type SignInFileds = z.infer<typeof verifiedSignInField>;
type ForgotPasswordFileds = z.infer<typeof verifiedForgotPassword>;
type updatePassword = z.infer<typeof verifyPassword>;
type OTPFileds = z.infer<typeof verifiedOTP>;
