import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollShowcase from "@/components/ScrollShowcase";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import HowToOrder from "@/components/HowToOrder";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ScrollShowcase />
      <Products />
      <Gallery />
      <About />
      <HowToOrder />
      <ContactForm />
      <Footer />
    </>
  );
}
