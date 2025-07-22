import Dashboard from "@/pages/students/dashboard";
import { StudentDashboardLayout } from "@/pages/students/layout";
import ForgotPassword from "@/pages/auth/forgot-password";
import AuthLayout from "@/pages/auth/layout";
import SignIn from "@/pages/auth/sign-in";
import SignUp from "@/pages/auth/sign-up";
import Landing from "@/pages/landing";
import NotFound from "@/pages/not-found";
import { Route, Routes } from "react-router-dom";
import { Restaurant } from "@/pages/students/restaurant";
import { Library } from "@/pages/students/library";
import { AcademicPersonnel } from "@/pages/students/academic-personnel";
import { FreshmenGuide } from "@/pages/students/freshman";
import { Services } from "@/pages/students/services";
import { Map } from "@/pages/students/map";
import { Setting } from "@/pages/students/settings";
import VerifyUser from "@/pages/auth/verify-user";

const Paths = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="verify-user" element={<VerifyUser />} />
      </Route>
      <Route path="/student" element={<StudentDashboardLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="restaurant" element={<Restaurant />} />
        <Route path="library" element={<Library />} />
        <Route path="academic-personnel" element={<AcademicPersonnel />} />
        <Route path="freshmenguide" element={<FreshmenGuide />} />
        <Route path="services" element={<Services />} />
        <Route path="map" element={<Map />} />
        <Route path="settings" element={<Setting />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Paths;
