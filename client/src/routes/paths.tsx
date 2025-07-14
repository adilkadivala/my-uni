import ForgotPassword from "@/pages/auth/forgot-password";
import AuthLayout from "@/pages/auth/layout";
import SignIn from "@/pages/auth/sign-in";
import SignUp from "@/pages/auth/sign-up";
import Landing from "@/pages/landing";
import { Route, Routes } from "react-router-dom";

const Paths = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Route>
    </Routes>
  );
};

export default Paths;
