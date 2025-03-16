import { useState, useEffect } from 'react';
import Logo from '../Logo';
import './Navbar.css';
import menu_icon from '../../assets/menu-icon.svg';
import close_icon from '../../assets/close-icon.svg';

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  function toggleMobileMenu() {
    setShowMobileMenu(prevState => !prevState);
  }
  
  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <Logo />
        
        <ul className={`navbar-links ${showMobileMenu ? 'show-menu' : ''}`}>
          <li className="navbar-item"><a href="#products">Products</a></li>
          <li className="navbar-item"><a href="#training">Training</a></li>
          <li className="navbar-item"><a href="#contact-us">Contact Us</a></li>
          <li className="navbar-item"><a href="#about-us">About Us</a></li>
        </ul>
        
        <button 
          className="navbar-toggle" 
          onClick={toggleMobileMenu}
          aria-label={showMobileMenu ? 'Close menu' : 'Open menu'}
        >
          <img 
            src={showMobileMenu ? close_icon : menu_icon} 
            alt={showMobileMenu ? 'Close menu' : 'Open menu'} 
            className="menu-icon"
          />
        </button>
      </div>
    </nav>
  );
}