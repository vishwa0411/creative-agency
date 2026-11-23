import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Service from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Service />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}