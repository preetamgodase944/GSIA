import './Navbar.css'
import menu_icon from '../../assets/menu-icon.svg'
import close_icon from '../../assets/close-icon.svg'
import { useState } from 'react'
export default function Navbar() {
  
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function setRightPos() {
    showMobileMenu ?setShowMobileMenu(false) :setShowMobileMenu(true)
  }
  
  return (
    <nav className='container'>
      <h1>BAGMANE</h1>
      <ul className={ showMobileMenu ? 'show-menu' : null }>
        <li><a href="#products">PRODUCTS</a></li>
        {/* <li><a href="#solutions">SOLUTIONS</a></li> */}
        {/* <li><a href="#products">INDUSTRIAL IoT</a></li> */}
        {/* <li><a href="#footer">SUPPORT</a></li> */}
        <li><a href="#contact-us">CONTACT US</a></li>
        <li><a href="#contact-us">ABOUT US</a></li>
      </ul>
      <img onClick={setRightPos} src={showMobileMenu ? close_icon : menu_icon} alt='menu-icon' className='menu-icon'/>
    </nav>
  )
}