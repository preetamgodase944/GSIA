import './Products.css'
import hmi from '../../assets/hmi.png'
import servo from '../../assets/servo.png'
import plc from '../../assets/plc.png'
import v_box from '../../assets/v-box.png'


export default function Products() {
  return (
    <div className='products container' id='products'>
      <h3 className='products-title'>OUR PRODUCTS</h3>
      <p className='products-description'>BAGMANE is one of leading global manufacturer. We independently develop, manufacture and sale HMI & PLC & IIoT V-BOX & SERVO & INVERTER.</p>
      <div className="products-grid">
          <a className="product" src="#">
            <img  src={hmi} alt="product hmi" className="product-image"/>
            <h3 className="product-title">HMI</h3>
            <p className="product-description">BAGMANE HMI has been widely recognized by the market for economical and practical, fast responcse speed, high configuration, multiple options etc.</p>
          </a>
          <a className="product" src="#">
            <img src={servo} alt="Product SERVO" className="product-image"/>
            <h3 className="product-title">SERVO</h3>
            <p className="product-description">BAGMANE Servo Drives has the features of high response, easy debugging, strong protection etc.</p>
          </a>
          <a className="product" src="#">
            <img src={plc} alt="Product PLC" className="product-image"/>
            <h3 className="product-title">PLC</h3>
            <p className="product-description">BAGMANE PLC has the features of high precision, fast speed, strong stability etc.</p>
          </a>
          <a className="product" src="#">
            <img src={v_box} alt="Product IIoT V-BOX" className="product-image"/>
            <h3 className="product-title">IIoT V-BOX</h3>
            <p className="product-description">V-BOX is the basic hardware of BAGMANE IIoT platform</p>
          </a>
          {/* Add more products as needed */}
      </div>
    </div>
  )
}