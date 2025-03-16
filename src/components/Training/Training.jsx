import React from "react";
import "./Training.css";

const trainingPrograms = [
  {
    title: "PLC Training",
    description:
      "Master industrial automation with hands-on training in Programmable Logic Controllers (PLC). Learn programming, troubleshooting, and real-world applications.",
    industries: ["Manufacturing", "Automotive", "Energy Sector"],
  },
  {
    title: "SCADA & HMI Training",
    description:
      "Gain expertise in SCADA & HMI for real-time monitoring and control systems. Learn how to visualize industrial processes and optimize automation.",
    industries: ["Process Control", "Smart Grids", "Oil & Gas"],
  },
];

const Training = () => {
  return (
    <div className="training container" id="training">
      <h2>Our Training Programs</h2>
      <div className="training-cards">
        {trainingPrograms.map((program, index) => (
          <div className="training-card" key={index}>
            <h3>{program.title}</h3>
            <p>{program.description}</p>
            <ul className="industries-list">
              {program.industries.map((industry, idx) => (
                <li key={idx}>{industry}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="view-all-training">
        <a href="#contact-us" className="view-all-btn">
          Explore More Training
        </a>
      </div>
    </div>
  );
};

export default Training;
