import { sendEmailOTP } from "./email";

const otpStore = new Map();

async function generateOTP(length: number = 6) {
  return Math.floor(100000 + Math.random() * 900000);
}

async function setOTP(email: string, otp: number) {
  otpStore.set(email, { otp, createdAt: Date.now() });
  await sendEmailOTP(email, otp);
}

async function verifyOTP(email: string, otp: number) {
  const data = otpStore.get(email);

  if (!data || data.otp !== otp) {
    return { status: 402, message: "Invalid OTP" };
  }

  const expiresIn = 5 * 60 * 1000;
  if (Date.now() - data.createdAt > expiresIn) {
    return { status: 403, message: "OTP expired" };
  }

  return { status: 200, message: "OTP verified" };
}

export { generateOTP, setOTP, verifyOTP };
