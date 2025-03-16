import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Training from "./components/Training/Training";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Hero />
        <Products />
        <Training />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}