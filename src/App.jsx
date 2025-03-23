import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Training from "./components/Training/Training";
import "./App.css";
import TrainingDetailsPage from "./pages/TrainingDetailsPage";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <main className="main-content">
                <Hero />
                <Products />
                <Training />
                <Contact />
              </main>
            }
          />
          <Route path="/training/details" element={<TrainingDetailsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}