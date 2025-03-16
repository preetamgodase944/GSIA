import React from 'react';
import './Footer.css';
import Logo from '../Logo';
import whatsappLogo from '../../assets/whatsapp.svg';
import facebookLogo from '../../assets/facebook.svg';
import linkedinLogo from '../../assets/linkedin.svg'

const Footer = () => {
    return (
        <footer className='footer' id='about-us'>
            <div className='footer-top'>
                <Logo imagePath="/assets/logo.png" height="80px" width="200px" />
                <p className='footer-tagline'>
                    Empowering industries with cutting-edge automation solutions.
                </p>
            </div>

            <div className='footer-contents'>
                <div className='footer-content'>
                    <h2>Company</h2>
                    <ul className="footer-list">
                        <li><a href="#contact-us">About Us</a></li>
                        <li><a href="#contact-us">Careers</a></li>
                    </ul>
                </div>

                <div className='footer-content'>
                    <h2>Products</h2>
                    <ul className="footer-list">
                        <li>HMI</li>
                        <li>PLC</li>
                        <li>V-BOX</li>
                        <li>Servo Motors</li>
                        <li>VFD</li>
                        <li>Control Panels</li>
                    </ul>
                </div>

                <div className='footer-content'>
                    <h2>Training</h2>
                    <ul className="footer-list">
                        <li>PLC Training</li>
                        <li>SCADA Training</li>
                        <li>HMI Training</li>
                        <li>Industrial IoT Training</li>
                    </ul>
                </div>

                <div className='footer-content'>
                    <h2>Contact</h2>
                    <ul className="footer-list">
                        <li>Email: reach.gsia@gmail.com</li>
                        <li>Phone: +91-7349443674</li>
                        <li>Service Helpline</li>
                        <li>Technical Support</li>
                    </ul>
                </div>

                <div className='footer-content'>
                    <h2>Address</h2>
                    <ul className="footer-list">
                        <li>Rajarajeshwari Nagar</li>
                        <li>Bangalore, India</li>
                        <li>581325</li>
                    </ul>
                </div>
            </div>

            <div className='social-icons'>
                <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer">
                    <img src={whatsappLogo} alt="WhatsApp" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={facebookLogo} alt="Facebook" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinLogo} alt="LinkedIn" />
                </a>
            </div>

            <hr />

            <p className='footer-copyright'>&copy; {new Date().getFullYear()} GSIA. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;
