import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
          <div className='footer-contents'>
            <div className='footer-content'>
                <h2 class="footer-title">BAGMANE</h2>
                <ul class="footer-list">
                    <li>Email</li>
                    <li>Service-Helpline</li>
                    <li>Technical Support</li>
                    <li>Address</li>
                </ul>
            </div>

            <div className='footer-content'>
              <h2>About</h2>
              <ul class="footer-list">
                    <li>About Bagmane</li>
                    <li>Distributor Recruitment</li>
                </ul>
            </div>

            <div className='footer-content'>
              <h2>PRODUCTS</h2>
              <ul class="footer-list">
                <li>HMI</li>
                <li>PLC</li>
                <li>V-BOX</li>
                <li>SERVO</li>
              </ul>
            </div>

            <div className='footer-content'>
              <h2>SOLUTIONS</h2>
              <ul class="footer-list">
                <li>IIoT</li>
                <li>MACHINERY</li>
              </ul>
            </div>

            <div className='footer-content'>
              <h2>INDUSTRIAL IoT</h2>
              <ul class="footer-list">
                <li>V-NET</li>
                <li>V-BOX IIOT HMI</li>
                <li>APP</li>
                <li>Solution</li>
                <li>V-NET Cloud Demo</li>
              </ul>
            </div>

            <div className='footer-content'>
              <h2>SUPPORT</h2>
              <ul class="footer-list">
                <li>SUPPORT</li>
                <li>Download</li>
                <li>After-sales Service</li>
                <li>APP</li>
              </ul>
            </div>
          </div>
          <hr/>
          <div className='social-icons'>
            <ul>
                <li>
                    <a href="https://web.whatsapp.com" target='#_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                            <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                            <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
                            </svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                        </svg>
                    </a>
                </li>
            </ul>
          </div>
          <hr/>
          <p className='footer-copyright'>&copy; 2024 BAGMANE ALL RIGHTS RESERVED</p>
        </div>  
  )
}

export default Footer