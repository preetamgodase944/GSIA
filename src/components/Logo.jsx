import React from "react";
import logo from '../assets/logo.png'

const Logo = ({ height = "50px"}) => {
  return (
    <div className="flex items-center justify-center" style={{paddingTop: '10px'}}>
      <img src={logo} alt="Company Logo" style={{ height }} />
    </div>
  );
};

export default Logo;