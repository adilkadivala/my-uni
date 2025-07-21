import express from "express";
import { signUp } from "../controllers/auth/auth-controller";
const router = express.Router();

router.route("/api/v1/sign-up").post(signUp);

export default router;
