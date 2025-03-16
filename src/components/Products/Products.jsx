import './Products.css';
import hmi from '../../assets/hmi.png';
import servo from '../../assets/servo.png';
import plc from '../../assets/plc.png';
import v_box from '../../assets/v-box.png';
import vfid from '../../assets/vfid.png';
import electrical_control_panel from '../../assets/electrical-control-panel.png';

export default function Products() {
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
          <div className="product-card">
            <div className="product-image-container">
              <img src={hmi} alt="HMI product" className="product-image"/>
            </div>
            <div className="product-content">
              <h3 className="product-title">HMI</h3>
              <p className="product-description">
                GSIA HMI has been widely recognized by the market for being economical and practical, with fast response speed, high configuration, and multiple options.
              </p>
              <a href="#" className="product-link">Learn More</a>
            </div>
          </div>
          
          <div className="product-card">
            <div className="product-image-container">
              <img src={servo} alt="Servo product" className="product-image"/>
            </div>
            <div className="product-content">
              <h3 className="product-title">SERVO</h3>
              <p className="product-description">
                GSIA Servo Drives feature high response times, easy debugging, and strong protection mechanisms.
              </p>
              <a href="#" className="product-link">Learn More</a>
            </div>
          </div>
          
          <div className="product-card">
            <div className="product-image-container">
              <img src={plc} alt="PLC product" className="product-image"/>
            </div>
            <div className="product-content">
              <h3 className="product-title">PLC</h3>
              <p className="product-description">
                GSIA PLC offers high precision, fast speed, and strong stability for your automation needs.
              </p>
              <a href="#" className="product-link">Learn More</a>
            </div>
          </div>
          
          <div className="product-card">
            <div className="product-image-container">
              <img src={v_box} alt="IIoT V-BOX product" className="product-image"/>
            </div>
            <div className="product-content">
              <h3 className="product-title">IIoT V-BOX</h3>
              <p className="product-description">
                V-BOX is the foundational hardware of GSIA's IIoT platform, enabling advanced connectivity.
              </p>
              <a href="#" className="product-link">Learn More</a>
            </div>
          </div>
          
          <div className="product-card">
            <div className="product-image-container">
              <img src={vfid} alt="VFID product" className="product-image"/>
            </div>
            <div className="product-content">
              <h3 className="product-title">VFID</h3>
              <p className="product-description">
                GSIA VFID technology provides reliable identification and tracking capabilities for industrial applications.
              </p>
              <a href="#" className="product-link">Learn More</a>
            </div>
          </div>
          
          <div className="product-card">
            <div className="product-image-container">
              <img src={electrical_control_panel} alt="Electrical Control Panel product" className="product-image"/>
            </div>
            <div className="product-content">
              <h3 className="product-title">Electrical Control Panel</h3>
              <p className="product-description">
                Our electrical control panels provide centralized management of industrial automation systems.
              </p>
              <a href="#" className="product-link">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}