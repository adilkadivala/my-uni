import CTA from "@/components/cta";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Status from "@/components/status";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Status />
      <CTA />
      <Footer />
    </>
  );
};

export default Landing;
