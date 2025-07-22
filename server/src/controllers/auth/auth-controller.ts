import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import {
  verifiedSignInField,
  verifiedSignUpField,
} from "../../config/types/auth";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { WelcomeEmail } from "../../services/email";

const jwt_secret = process.env.JWT_SECRET;
const client = new PrismaClient();

// create-account ----- sign-up ---------- //

const signUp = async (req: Request, res: Response) => {
  try {
    const verifiedFields = verifiedSignUpField.safeParse(req.body);

    const { firstname, lastname, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 7);

    const { success, error } = verifiedFields;

    if (!success) {
      res.status(403).json({
        error: "Validation failed",
        details: error.issues,
      });
      return;
    }

    await client.user.create({
      data: {
        firstname,
        lastname,
        email,
        password: hashedPassword,
      },
    });

    await WelcomeEmail(email, firstname);

    res.status(200).json("account created successfully!!");
  } catch (error: any) {
    res.status(500).json({ message: "internal server error" });
    console.log(error?.message);
  }
};

// get-account ----- sign-in ---------- //

const signIn = async (req: Request, res: Response) => {
  try {
    const verifiedFields = verifiedSignInField.safeParse(req.body);

    const { success, error } = verifiedFields;

    if (!success) {
      res.status(403).json({
        error: "Validation failed",
        details: error.issues,
      });
      return;
    }

    const { email, password } = req.body;
    const user = await client.user.findFirst({ where: { email } });

    if (!user) {
      res.status(401).json({ message: "user not found" });
      return;
    }

    const authenticateUser = await bcrypt.compare(password, user.password);

    if (!authenticateUser) {
      res.status(402).send({ message: "invalid cradentials" });
      return;
    }

    const token = await jwt.sign(
      { email: user?.email, role: user?.role },
      jwt_secret as string
    );

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    res.send({ message: "You logged-in" });
  } catch (error: any) {
    res.status(500).json({ message: "internal server error" });
    console.log(error?.message);
  }
};

//

export { signUp, signIn };
