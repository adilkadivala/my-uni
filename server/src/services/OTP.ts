const otpStore = new Map();

function generateOTP(length = 6) {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function setOTP(email:string, otp:number) {
  otpStore.set(email, { otp, createdAt: Date.now() });
}

function verifyOTP(email:string, otp:number) {
  const data = otpStore.get(email);
  if (!data) return false;
  return data.otp === otp;
}

module.exports = { generateOTP, setOTP, verifyOTP };
