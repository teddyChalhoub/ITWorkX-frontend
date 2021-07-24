import { render } from "@testing-library/react";
import React from "react";
import "./serviceDisplay.css";



const ServiceDisplay = (props) => {

  return (
    <div className="item_details">
     
        <img className="item_details-img" src={props.service.imageUrl}/>
        <h1 className='title'>{props.service.title}</h1>
        <h3 className='pricell'>{props.service.price}</h3>
        <div className='desc'>
       <p>{props.service.description}</p>
    </div>
      <div className="item_details-title"></div>
    </div>
  );
};
export default ServiceDisplay;
