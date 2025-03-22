import { useState } from 'react';
import './Products.css';
import hmi from '../../assets/hmi.png';
import servo from '../../assets/servo.png';
import plc from '../../assets/plc.png';
import v_box from '../../assets/v-box.png';
import vfid from '../../assets/vfid.png';
import electrical_control_panel from '../../assets/electrical-control-panel.png';

export default function Products() {
  const [activeModal, setActiveModal] = useState(null);
  
  // Product details with extended information
  const productDetails = {
    first: {
      title: "Electrical control panel for Packing Machines",
      image: hmi,
      shortDesc: "GSIA HMI has been widely recognized by the market for being economical and practical, with fast response speed, high configuration, and multiple options.",
      fullDesc: "Our Human Machine Interface (HMI) solutions provide intuitive control interfaces for industrial applications. Built with advanced touchscreen technology and configurable displays, GSIA HMIs offer reliability and ease of use. Compatible with all major industrial protocols and featuring customizable widgets, our HMIs integrate seamlessly with your existing systems.",
      features: [
        "Touch screen sizes from 4.3\" to 15\"",
        "High-resolution displays with wide viewing angles",
        "Multiple communication ports",
        "IP65 front panel waterproof design",
        "Intuitive programming software"
      ]
    },
    second: {
      title: "Electrical Control panel for Vibrator feeding Applications",
      image: servo,
      shortDesc: "GSIA Servo Drives feature high response times, easy debugging, and strong protection mechanisms.",
      fullDesc: "GSIA Servo systems deliver precise motion control for demanding applications. Our servo drives and motors provide exceptional accuracy, quick response times, and enhanced stability. Available in various power ranges and configurations to meet diverse industrial requirements.",
      features: [
        "High-precision positioning control",
        "Real-time torque monitoring",
        "Automatic tuning functions",
        "Multiple control modes",
        "Integrated safety features"
      ]
    },
    third: {
      title: "Electrical Control panel for Stitching conveyor and loader",
      image: plc,
      shortDesc: "GSIA PLC offers high precision, fast speed, and strong stability for your automation needs.",
      fullDesc: "Our Programmable Logic Controllers (PLCs) are the backbone of industrial automation systems. GSIA PLCs combine reliability with performance to deliver consistent control across manufacturing processes. From compact units to modular systems, our PLC range can be scaled to fit projects of any size.",
      features: [
        "Fast scanning and execution times",
        "Modular expansion capabilities",
        "Built-in Ethernet connectivity",
        "Comprehensive instruction set",
        "User-friendly programming environment"
      ]
    },
    fourth: {
      title: "Electrical control panel Loadcell weighing application",
      image: v_box,
      shortDesc: "V-BOX is the foundational hardware of GSIA's IIoT platform, enabling advanced connectivity.",
      fullDesc: "The GSIA V-BOX serves as the gateway for Industrial Internet of Things applications. This powerful edge device collects, processes, and transmits data from industrial equipment to cloud platforms. With robust security features and multiple connectivity options, V-BOX bridges the gap between operational technology and information technology.",
      features: [
        "Multiple protocol support",
        "Edge computing capabilities",
        "Secure data transmission",
        "Remote management tools",
        "Scalable architecture"
      ]
    },
    fifth: {
      title: "Complete solution for Water treatment plants Domestic/Industrial",
      image: vfid,
      shortDesc: "GSIA VFID technology provides reliable identification and tracking capabilities for industrial applications.",
      fullDesc: "Our Visual Field Identification Device (VFID) technology enhances traceability and quality control in manufacturing environments. Using advanced imaging and recognition algorithms, VFID systems accurately identify, verify, and track components throughout production processes. Improve efficiency and reduce errors with GSIA's intelligent identification solutions.",
      features: [
        "High-speed code reading",
        "Multi-code recognition",
        "Quality verification",
        "Production statistics",
        "Integration with MES systems"
      ]
    },
    // sixth: {
    //   title: "Electrical Control Panel",
    //   image: electrical_control_panel,
    //   shortDesc: "Our electrical control panels provide centralized management of industrial automation systems.",
    //   fullDesc: "GSIA electrical control panels are engineered for reliability and performance. Custom-designed to your specifications, our panels integrate control components into a centralized system for efficient operation. Each panel undergoes rigorous testing to ensure compliance with international standards and regulations.",
    //   features: [
    //     "Custom design services",
    //     "Quality components from trusted brands",
    //     "Comprehensive documentation",
    //     "Factory acceptance testing",
    //     "Technical support and maintenance"
    //   ]
    // }
    // Note: Removed the 'panel' product to demonstrate with 5 products
  };

  // Handle learn more click
  const handleLearnMore = (productId, e) => {
    e.preventDefault();
    setActiveModal(productId);
  };

  // Close modal handler
  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="section-title">
          <h2>Our Products</h2>
          <p className="section-description">
            GSIA is one of the leading global manufacturers. We independently develop, manufacture, and sell HMI, PLC, IIoT V-BOX, SERVO, and INVERTER solutions.
          </p>
        </div>
        
        <div className="products-grid">
          {Object.keys(productDetails).map((productId) => {
            const product = productDetails[productId];
            return (
              <div className="product-card" key={productId}>
                <div className="product-image-container">
                  <img src={product.image} alt={`${product.title} product`} className="product-image"/>
                </div>
                <div className="product-content">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.shortDesc}</p>
                  <a href="#" className="product-link" onClick={(e) => handleLearnMore(productId, e)}>Learn More</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Product Detail Modal */}
      {activeModal && (
        <div className="product-modal-overlay" onClick={closeModal}>
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>×</button>
            <div className="modal-image-container">
              <img 
                src={productDetails[activeModal].image} 
                alt={productDetails[activeModal].title} 
                className="modal-image" 
              />
            </div>
            <div className="modal-content">
              <h2>{productDetails[activeModal].title}</h2>
              <p className="modal-description">{productDetails[activeModal].fullDesc}</p>
              <h3>Key Features</h3>
              <ul className="feature-list">
                {productDetails[activeModal].features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className="modal-footer">
                <button className="contact-btn">
                  <a href="#contact-us">Contact Sales</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}