import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import About from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhyUs from "./components/WhyUs";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <Testimonials />
      <About />
      <WhyUs />
      <Contact />
      <Footer />
    </>
  );
}
