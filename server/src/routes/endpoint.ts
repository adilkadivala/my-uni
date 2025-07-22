import express from "express";
import { signIn, signUp } from "../controllers/auth/auth-controller";
const router = express.Router();

router.route("/api/v1/sign-up").post(signUp);
router.route("/api/v1/sign-in").post(signIn);

export default router;
