import React from "react";
import "../../pages/service/service-page.css";

const ServiceDisplay2 = (props) => {
  console.log(props.second)
  return (
    <div className="services__cards--content">
      {props.second ? (
        <div
          className="main"
          onClick={() =>
            props.handleVisibilityAndData(true, props.hakunamatata)
          }
        >
          <div className="card_details_flex">
            <h1 className="text-center">{props.hakunamatata.title}</h1>
            <h3 className="text-center">{props.hakunamatata.price}</h3>
            <p className="text-center">{props.hakunamatata.description}</p>
          </div>
          <div className="card_image_flex">
            <img
              className="services__img img1"
              src={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"}
            ></img>
          </div>
        </div>
      ) : (
        <div
          className="main"
          onClick={() =>
            props.handleVisibilityAndData(true, props.hakunamatata)
          }
        >
          <div className="card_image_flex">
            <img
              className="services__img img1"
              src={props.hakunamatata.imageUrl}
            ></img>
          </div>
          <div className="card_details_flex">
            <h1 className="text-center">{props.hakunamatata.title}</h1>
            <h3 className="text-center">{props.hakunamatata.price}</h3>
            <p className="text-center">{props.hakunamatata.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default ServiceDisplay2;
