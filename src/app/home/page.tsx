import Footer from "@/_components/Footer";
import Navbar from "@/_components/Navbar";
import Hero from "./_sections/Hero";
import Services from "./_sections/Services";
import Skills from "./_sections/Skills";
import Projects from "./_sections/Projects";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}
