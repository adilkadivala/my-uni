import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { verifiedField } from "../../config/types/auth";
import bcrypt from "bcrypt";

const client = new PrismaClient();

// create-account ----- sign-up ---------- //

const signUp = async (req: Request, res: Response) => {
  try {
    const verifiedData = verifiedField.safeParse(req.body);

    const { firstname, lastname, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 7);

    const { success, error } = verifiedData;

    if (success) {
      await client.user.create({
        data: {
          firstname,
          lastname,
          email,
          password: hashedPassword,
        },
      });

      res.status(200).json("account created successfully!!");
    }

    if (error) {
      res.status(200).json(error.message[]);
    }
  } catch (error) {
    console.log(error);
  }
};

export { signUp };
