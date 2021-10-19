import React from "react";
import "./Card.css";
import Button from "../Button/Button";

import { Link } from "react-router-dom";

const Card = ({ title, logo, children }) => {
  return (
    <div className='box'>
      <div className='card'>
        <div className='headingWrapper'>
          <img src={logo} alt='logo' className='logo' />
          <h1 className='heading'>{title}</h1>
        </div>
        {children}
        
      </div>
    </div>
  );
};

export default Card;
