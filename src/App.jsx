import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Solutions from "./components/Solutions/Solutions";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Solutions />
      <Contact />
      <Footer />
    </>
  )
}