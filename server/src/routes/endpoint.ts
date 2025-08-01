import express from "express";
import {
  signIn,
  signUp,
  forgotPassword,
  compairOTP,
  updateUserPassword,
} from "../controllers/auth/auth-controller";
const router = express.Router();

router.route("/api/v1/sign-up").post(signUp);
router.route("/api/v1/sign-in").post(signIn);
router.route("/api/v1/forgot-password").post(forgotPassword);
router.route("/api/v1/verify-otp").post(compairOTP);
router.route("/api/v1/update-password").put(updateUserPassword);

export default router;
