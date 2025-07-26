import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import {
  verifiedForgotPassword,
  verifiedOTP,
  verifiedSignInField,
  verifiedSignUpField,
  verifyPassword,
} from "../../config/types/auth";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { WelcomeEmail } from "../../services/email";
import { generateOTP, setOTP, verifyOTP } from "../../services/OTP";

const jwt_secret = process.env.JWT_SECRET;
const client = new PrismaClient();

// create-account ----- sign-up ---------- //

const signUp = async (req: Request, res: Response) => {
  try {
    const verifiedFields = verifiedSignUpField.safeParse(req.body);

    const { success, error } = verifiedFields;

    if (!success) {
      const formattedErrors = error?.issues.map((issue) => ({
        field: issue.path[0],
        message: issue.message,
      }));

      res
        .status(403)
        .json({ error: "Validation failed", details: formattedErrors });
      return;
    }

    const { firstname, lastname, email, password } = verifiedFields?.data;

    const createUser = await client.user.findFirst({ where: { email } });
    if (createUser) {
      res.status(406).json({ error: "email already exist" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 7);

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

// ---- || ----- //

// get-account ----- sign-in ---------- //
const signIn = async (req: Request, res: Response) => {
  try {
    const verifiedFields = verifiedSignInField.safeParse(req.body);

    const { success, error } = verifiedFields;

    if (!success) {
      const formattedErrors = error?.issues.map((issue) => ({
        field: issue.path[0],
        message: issue.message,
      }));

      res
        .status(403)
        .json({ error: "Validation failed", details: formattedErrors });
      return;
    }

    const { email, password } = req.body;
    const user = await client.user.findFirst({ where: { email } });

    if (!user) {
      res.status(401).json({ message: "Account not Found !!" });
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
    return;
  }
};

// ---- || ----- ////

// forgot-password ----- sign-in ---------- //

const forgotPassword = async (req: Request, res: Response) => {
  try {
    const verifiedFields = verifiedForgotPassword.safeParse(req.body);

    const { success, error } = verifiedFields;
    if (!success) {
      const formattedErrors = error?.issues.map((issue) => ({
        field: issue.path[0],
        message: issue.message,
      }));

      res
        .status(403)
        .json({ error: "Validation failed", details: formattedErrors });
      return;
    }

    const { email } = verifiedFields.data;

    const findUser = await client.user.findFirst({ where: { email } });

    if (!findUser) {
      res.status(401).json({ message: "Account not Found !!" });
      return;
    }

    const generate = await generateOTP(6);
    const otp = await setOTP(email, generate);

    res.status(200).json({ message: "otp sent to your email" });
    return;
  } catch (error: any) {
    console.log(error.message);
  }
};

// ---- || ----- ////

// verify user

const compairOTP = async (req: Request, res: Response) => {
  try {
    const verifiedField = verifiedOTP.safeParse(req.body);

    const { success, error } = verifiedField;
    if (!success) {
      const formattedErrors = error?.issues.map((issue) => ({
        field: issue.path[0],
        message: issue.message,
      }));

      res
        .status(403)
        .json({ error: "Validation failed", details: formattedErrors });
      return;
    }

    const { otp, email } = verifiedField.data;

    const result = await verifyOTP(email, otp);

    if (result.status === 200) {
      await client.user.update({
        where: { email },
        data: { isVerified: true },
      });

      res.status(result.status).json({ message: result.message });

      return;
    }
  } catch (error: any) {
    console.log(error.message);
  }
};

// ---- || ----- ////

// update-password

const updateUserPassword = async (req: Request, res: Response) => {
  try {
    const verifiedFields = verifyPassword.safeParse(req.body);

    const { success, error } = verifiedFields;

    if (!success) {
      const formattedErrors = error?.issues.map((issue) => ({
        field: issue.path[0],
        message: issue.message,
      }));

      res
        .status(403)
        .json({ error: "Validation failed", details: formattedErrors });
      return;
    }

    const { email, password } = verifiedFields?.data;

    const hashedPassword = await bcrypt.hash(password, 7);

    await client.user.update({
      where: { email },
      data: { password: hashedPassword },
    });

    res.status(200).json({ message: "profile updated successfully" });
    return;
  } catch (error: any) {
    console.log(error.message);
  }
};

// ---- || ----- ////

// logout

const logOut = async (req: Request, res: Response) => {
  try {
  } catch (error) {}
};

export { signUp, signIn, forgotPassword, compairOTP, updateUserPassword };
