import { render } from "@testing-library/react";
import React from "react";

import '../../pages/service-page.css';
import roro from "../../images/test.jpg";



const ServiceDisplay2 = (props) => {
 
  return (
    <div className="services__cards--content">
  {props.second? 
     <div  className="main" onClick={
      ()=> props.handleVisibilityAndData(true, props.hakunamatata)
    }>
      <div className="card_details_flex">
        <h1 className="text-center">{props.hakunamatata.title}</h1>
        <h3 className="text-center">{props.hakunamatata.price}</h3>
        <p className="text-center">
         {props.hakunamatata.description}
        </p>
      </div>
      <div className="card_image_flex">
        <img className="services__img img1" src={props.hakunamatata.imageUrl}></img>
      </div>
    </div>
:

<div  className="main" onClick={
  ()=> props.handleVisibilityAndData(true, props.hakunamatata)
}>
   <div className="card_image_flex">
    <img className="services__img img1" src={props.hakunamatata.imageUrl}></img>
  </div>
  <div className="card_details_flex">
    <h1 className="text-center">{props.hakunamatata.title}</h1>
    <h3 className="text-center">{props.hakunamatata.price}</h3>
    <p className="text-center">
     {props.hakunamatata.description}
    </p>
  </div>
 
</div>
}
 
   
  </div>
  );
};
export default ServiceDisplay2;
