import { sendEmailOTP } from "./email";

const otpStore = new Map();

async function generateOTP(length: number = 6) {
  return Math.floor(100000 + Math.random() * 900000);
}

async function setOTP(email: string, otp: number) {
  otpStore.set(email, { otp, createdAt: Date.now() });
  await sendEmailOTP(email, otp);
}

async function verifyOTP(otp: number) {
  const data = otpStore.get(otp);

  if (data.otp !== otp) {
    return { status: 402, message: "Invalid OTP" };
  }

  return { status: 200, message: "OTP verified" };
}

export { generateOTP, setOTP, verifyOTP };
