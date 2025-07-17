import About from "@/components/about";
import Campus from "@/components/campus";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Programs from "@/components/programs";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Campus />
      <CTA />
      <Footer />
    </div>
  );
};

export default Landing;
