import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import Applications from "./components/Applications";
import Projects from "./components/Projects";
import WhyUs from "./components/WhyUs";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import WhatsAppFloat from "./components/WhatsAppFloat";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About/>
        <TrustStrip />
        <Services />
        <Solutions />
        <Applications />
        <Projects />
        <WhyUs />
        <Testimonials/>
        <CTA />
        <Contact/>
      </main>
      <Footer />

      <WhatsAppFloat/>
    </>
  );
}

export default App;