import GoogleMapReact from 'google-map-react';
import './Address.css'
import { Link } from 'react-router-dom';

const TextComponent = ({ text }) => <div>{text}</div>;

const Address = () => {

    const defaultProps = {
        center: {
          lat: 15.24692352522447,
          lng: 74.62136036564051
        },
        zoom: 11
      };

  return (
    <div className='address-container' id='contact-us'>
        <div className='address-box'>
        <div className="address-text">
            <h3>Address</h3>
            <p>Rajrajeshwari Nagar,</p>
            <p>Bangalore</p>
            <p>581325</p>
            <p>INDIA</p>
        </div>
        <div className="address-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >     
            <TextComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
            </GoogleMapReact>
        </div>
        </div>
        <div className="view-all-solutions">
                <Link to='/solutions'><button className='view-all-btn'>View All Solutions</button></Link>
        </div> 
    </div>
  )
}

export default Address