import React from 'react';
import './Footer.css';
import Logo from '../Logo';
import whatsappLogo from '../../assets/whatsapp.svg';
import { Link } from 'react-router-dom';

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
                        <li><a href="/#contact-us">About Us</a></li>
                    </ul>
                </div>

                <div className='footer-content'>
                    <h2><Link to='/trading/details'>Trading</Link></h2>
                    <ul className="footer-list">
                        <li><Link to='/trading/details'>WECON V-BOX (IIoT Gateway)</Link></li>
                        <li><Link to='/trading/details'>WECON SERVO DRIVES</Link></li>
                        <li><Link to='/trading/details'>WECON PLC</Link></li>
                        <li><Link to='/trading/details'>WECON HMI</Link></li>
                        <li><Link to='/trading/details'>WECON INVERTER</Link></li>
                        <li><Link to='/trading/details'>INDUSTRIAL ETHERNET SWITCH</Link></li>
                    </ul>
                </div>

                <div className='footer-content'>
                    <h2><Link to='/training/details'>Training</Link></h2>
                    <ul className="footer-list">
                        <li><Link to='/training/details'>PLC Training</Link></li>
                        <li><Link to='/training/details'>SCADA Training</Link></li>
                        <li><Link to='/training/details'>HMI Training</Link></li>
                        <li><Link to='/training/details'>Industrial IoT Training</Link></li>
                    </ul>
                </div>

                <div className='footer-content'>
                    <h2>Contact</h2>
                    <ul className="footer-list">
                        <li>Email: reach.gsia@gmail.com</li>
                        <li>Phone: +91-7349443674</li>
                    </ul>
                </div>

                <div className='footer-content'>
                    <h2>Address</h2>
                    <ul className="footer-list">
                        <li>Global Source Industrial Automation</li>
                        <li>No. 32, Ground Floor</li>
                        <li>Opp. MPM park,</li>
                        <li>MPM Layout, Mallathhalli</li>
                        <li>Bengaluru, India</li>
                        <li>560056</li>
                    </ul>
                </div>
            </div>

            <div className='social-icons'>
                <a href="https://wa.me/+917349443674" target="_blank" rel="noopener noreferrer">
                    <img src={whatsappLogo} alt="WhatsApp" />
                </a>
                {/* <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={facebookLogo} alt="Facebook" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinLogo} alt="LinkedIn" />
                </a> */}
            </div>

            <hr />

            <p className='footer-copyright'>&copy; {new Date().getFullYear()} GSIA. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;
