import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./TrainingDetailsPage.css";

// Import images
import heroImage from "../assets/training-hero.png";
import { downloadBrochure } from "../components/Helper/CommonFuctions";

const TrainingDetailsPage = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="training-details-page">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={heroImage} alt="Training in Progress" className="hero-image" />
        <div className="hero-content">
          <h1>Unlock Your Potential in Industrial Automation</h1>
          <p>
            Elevate your skills with our comprehensive training programs designed for professionals and students alike.
          </p>
          <button className="download-btn" onClick={() => downloadBrochure()}>
            Download Brochure
          </button>
        </div>
      </div>

      {/* About Us */}
      <div className="about-us-section">
        <h2>About Our Training Programs</h2>
        <p>
          A leading knowledge package in the processing and treatment industry, offering education and training courses for managers, technicians, operators, and students in process automation. Courses cover automation concepts, instrumentation, PLC, SCADA, HMI, VFD, SERVO, and more, according to recognized industrial standards and best practices.
        </p>
      </div>

      {/* Training Modules */}
      <div className="training-module-section">
        <h2>Explore Our Training Modules</h2>
        <div className="module-grid">
          <div className="training-module">
            {/* <img src={classroomImage} alt="Classroom Training" className="module-image" /> */}
            <h3>PLC Training</h3>
            <ul>
              <li>Introduction to PLC Architecture & Components</li>
              <li>Understanding Digital & Analog Inputs/Outputs</li>
              <li>PLC Programming with Ladder Logic</li>
              <li>Timers, Counters, Arithmetic & Logic Operations</li>
              <li>Upload, Download & Monitoring of Programs</li>
              <li>Troubleshooting & Best Practices</li>
            </ul>
          </div>

          <div className="training-module">
            {/* <img src={handsOnImage} alt="Hands-On Training" className="module-image" /> */}
            <h3>HMI and SCADA Training</h3>
            <ul>
              <li>Introduction to HMI & Various Industry Models</li>
              <li>Designing HMI Screens for Monitoring & Control</li>
              <li>Connecting HMI with PLC</li>
              <li>Real-Time Data Visualization & Alerts</li>
              <li>SCADA Software Overview & Industrial Applications</li>
              <li>Creating & Editing Graphical Interfaces</li>
              <li>Real-Time & Historical Data Trending</li>
              <li>Alarm & Event Management</li>
              <li>Communication with PLC & Field Devices</li>
              <li>Writing Automation Scripts</li>
            </ul>
          </div>

          {/* Additional modules can be added similarly */}

          <div className="training-module">
            <h3>VFD and Servo Training</h3>
            <ul>
              <li>Introduction to VFD and Motor Control</li>
              <li>Hands-on configuration of VFD parameters, start/stop control, and speed variation</li>
              <li>Integration of VFD with PLC & SCADA</li>
            </ul>
          </div>

          <div className="training-module">
            <h3>Industrial Communication Protocols</h3>
            <ul>
              <li>Fieldbus (Modbus RTU, PROFIBUS, CAN Bus)</li>
              <li>Ethernet-Based Protocols (PROFINET, EtherNet/IP, Modbus TCP/IP)</li>
            </ul>
          </div>

          <div className="training-module">
            <h3>Industrial Automation Crash Course</h3>
            <ul>
              <li>Introduction to Industrial Automation</li>
              <li>PLC Programming & Implementation</li>
              <li>SCADA & HMI Development</li>
              <li>Variable Frequency Drives (VFDs) & Motion Control</li>
              <li>Industrial Communication Protocols</li>
              <li>Industry Projects & Hands-On Training</li>
            </ul>
          </div>

          <div className="training-module">
            <h3>PGDIA for Industry 4.0 Course</h3>
            <p>
              Comprehensive training program focusing on modern industrial automation systems and Industry 4.0 concepts.
            </p>
          </div>

          <div className="training-module">
            <h3>Internship Programme</h3>
            <ul>
              <li><strong>Duration:</strong> 4 to 12 weeks (Flexible schedules available)</li>
              <li><strong>Mode:</strong> Online & Offline (On-Site Training Available)</li>
            </ul>
          </div>

          <div className="training-module">
            <h3>Academic Projects (Engineering/Diploma)</h3>
            <p>
              Guidance and support for academic projects related to industrial automation and control systems.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <h2>Ready to Take the Next Step?</h2>
        <p>
          Enroll in our training programs today and gain the skills you need to excel in the field of industrial automation.
        </p>
        <button className="enroll-btn">
          <Link
            to="/#contact-us"
            onClick={() => scrollToSection('contact-us')}
          >
            Contact Now
          </Link>
        </button>
      </div>
    </div>
  );
};

export default TrainingDetailsPage;