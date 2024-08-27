import Address from "./components/Address/Address";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import HomePage from "./Pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Solutions from "./components/Solutions/Solutions";
import { Routes, Route } from 'react-router-dom'
import SolutionPage from "./Pages/SolutionsPage/SolutionPage";
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solutions" element={<SolutionPage />} />
      </Routes>
      <Footer />
    </>
  )
}