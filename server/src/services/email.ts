import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function WelcomeEmail(to: string, name: string) {
  const mailOptions = {
    from: `"Your most Welcome" <${process.env.EMAIL_USER}>`,
    to,
    subject: "WELCOME !! to my-uni",
    text: `hey ${name}, Welcome to my uni !! we honored to having you !!`,
  };

  return transporter.sendMail(mailOptions);
}
async function sendEmailOTP(to: string, otp: number) {
  const mailOptions = {
    from: `"OTP Service" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Your OTP Code",
    text: `Your OTP code is ${otp}.   OTP will expire in 5 minutes`,
  };

  return transporter.sendMail(mailOptions);
}

export { WelcomeEmail, sendEmailOTP };
