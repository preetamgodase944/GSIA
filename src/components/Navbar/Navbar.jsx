import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo';
import './Navbar.css';
import menu_icon from '../../assets/menu-icon.svg';
import close_icon from '../../assets/close-icon.svg';
import { scrollToTop } from '../../utils/Helper';

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Add/remove scrolled class on scroll
  // useEffect(() => {
  //   const handleScroll = () => setScrolled(window.scrollY > 50);
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  const toggleMobileMenu = () => setShowMobileMenu(prev => !prev);

  const isLinkActive = (to, hash) => {
    if (hash) {
      return location.pathname === '/' && location.hash === hash;
    }
    return location.pathname === to;
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <Link
          to="/"
          className="navbar-logo"
          onClick={() => {
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
          }}
        >
          <Logo />
        </Link>

        <ul className={`navbar-links ${showMobileMenu ? 'show-menu' : ''}`}>
          <li className="navbar-item">
            <a
              href="/#products"
              className={isLinkActive('/', '#products') ? 'active' : ''}
            >
              Products
            </a>
          </li>
          <li className="navbar-item">
            <Link
              to="/training/details"
              onClick={scrollToTop}
              className={isLinkActive('/training/details') ? 'active' : ''}
            >
              Training
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/trading/details"
              onClick={scrollToTop}
              className={isLinkActive('/trading/details') ? 'active' : ''}
            >
              Trading
            </Link>
          </li>
          <li className="navbar-item">
            <a
              href="/#contact-us"
              className={isLinkActive('/', '#contact-us') ? 'active' : ''}
            >
              Contact Us
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="/#about-us"
              className={isLinkActive('/', '#about-us') ? 'active' : ''}
            >
              About Us
            </a>
          </li>
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