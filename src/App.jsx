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

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Solutions />
        <Applications />
        <Projects />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;