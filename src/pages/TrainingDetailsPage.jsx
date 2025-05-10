import React from "react";
import { useNavigate } from "react-router-dom";
import "./TrainingDetailsPage.css";
import { scrollToTop } from "../utils/Helper";

const TrainingDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="training-details-page">
      <div className="training-details-header">
        <h1>Training Programs</h1>
        <p>
          A leading knowledge package, processing and treatment industry offering
          education and training courses for managers, technicians, operators and
          students in process automation. Courses comprise automation concepts,
          instrumentation, PLC, SCADA, HMI, VFD, SERVO according to recognized
          industrial standards and best practice.
        </p>
      </div>

      <div className="training-module-section">
        <div className="training-module">
          <h2>PLC Training</h2>
          <div className="module-content">
            <h3>Module 1: PLC (Programmable Logic Controller)</h3>
            <ul>
              <li>Introduction to PLC Architecture & Components</li>
              <li>Understanding Digital & Analog Inputs/Outputs</li>
              <li>PLC Programming with Ladder Logic</li>
              <li>Timers, Counters, Arithmetic & Logic Operations</li>
              <li>Upload, Download & Monitoring of Programs</li>
              <li>Troubleshooting & Best Practices</li>
            </ul>
          </div>
        </div>

        <div className="training-module">
          <h2>HMI and SCADA Training</h2>
          <div className="module-content">
            <h3>Module 2: HMI (Human-Machine Interface)</h3>
            <ul>
              <li>Introduction to HMI & Various Industry Models</li>
              <li>Designing HMI Screens for Monitoring & Control</li>
              <li>Connecting HMI with PLC</li>
              <li>Real-Time Data Visualization & Alerts</li>
            </ul>

            <h3>Module 3: SCADA (Supervisory Control & Data Acquisition)</h3>
            <ul>
              <li>SCADA Software Overview & Industrial Applications</li>
              <li>Creating & Editing Graphical Interfaces</li>
              <li>Real-Time & Historical Data Trending</li>
              <li>Alarm & Event Management</li>
              <li>Communication with PLC & Field Devices</li>
              <li>Writing Automation Scripts</li>
            </ul>
          </div>
        </div>

        <div className="training-module">
          <h2>VFD and Servo Training</h2>
          <div className="module-content">
            <ul>
              <li>Introduction to VFD and Motor Control</li>
              <li>Hands-on configuration of VFD parameters, start/stop control, and speed variation</li>
              <li>Integration of VFD with PLC & SCADA</li>
            </ul>
          </div>
        </div>

        <div className="training-module">
          <h2>Industrial Communication Protocols</h2>
          <div className="module-content">
            <ul>
              <li>Fieldbus (Modbus RTU, PROFIBUS, CAN Bus)</li>
              <li>Ethernet-Based Protocols (PROFINET, EtherNet/IP, Modbus TCP/IP)</li>
            </ul>
          </div>
        </div>

        <div className="training-module">
          <h2>Industrial Automation Crash Course</h2>
          <div className="module-content">
            <ul>
              <li>Introduction to Industrial Automation</li>
              <li>PLC Programming & Implementation</li>
              <li>SCADA & HMI Development</li>
              <li>Variable Frequency Drives (VFDs) & Motion Control</li>
              <li>Industrial Communication Protocols</li>
              <li>Industry Projects & Hands-On Training</li>
            </ul>
          </div>
        </div>

        <div className="training-module">
          <h2>PGDIA for Industry 4.0 Course</h2>
          <div className="module-content">
            <p>Comprehensive training program focusing on modern industrial automation systems and Industry 4.0 concepts.</p>
          </div>
        </div>

        <div className="training-module">
          <h2>Internship Programme</h2>
          <div className="module-content">
            <h3>Internship Duration</h3>
            <p>4 to 12 weeks (Flexible schedules available)</p>
            <h3>Mode of Training</h3>
            <p>Online & Offline (On-Site Training Available)</p>
          </div>
        </div>

        <div className="training-module">
          <h2>Academic Projects (Engineering/Diploma)</h2>
          <div className="module-content">
            <p>Guidance and support for academic projects related to industrial automation and control systems.</p>
          </div>
        </div>
      </div>

      <div className="back-button-container">
        <button className="back-btn" onClick={() => {navigate('/'); scrollToTop()}}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default TrainingDetailsPage;