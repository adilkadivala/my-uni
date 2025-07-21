import { z } from "zod";

export const verifiedField = z.object({
  firstname: z
    .string()
    .min(3, { message: "first name atleast should greater then 3 char." })
    .max(10, { message: "first name should not long then 10 char." }),
  lastname: z
    .string()
    .min(3, { message: "last name atleast should greater then 3 char." })
    .max(10, { message: "last name should not long then 10 char." }),
  email: z.string().email(),
  password: z
    .string()
    .min(5, { message: "password atleast should long then 5 char." })
    .max(100, { message: "password should not long then 100 char." }),
});

type SignUpFileds = z.infer<typeof verifiedField>;
