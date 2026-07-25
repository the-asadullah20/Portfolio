import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import PressureStatement from "@/components/PressureStatement";
import About from "@/components/About";
import Resume from "@/components/Resume";
import SystemProjects from "@/components/SystemProjects";
import RoleMarquee from "@/components/RoleMarquee";
import FeaturedProjects from "@/components/FeaturedProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <PressureStatement />
        <About />
        <Resume />
        <SystemProjects />
        <RoleMarquee />
        <FeaturedProjects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
