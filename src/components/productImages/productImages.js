import React, { useState } from "react";
import "./productImages.css";

const ProductImages = (props) => {

  const [image, setImage] = useState(props.images[0].url);

  return (
    <div className="item__image__container">
      <div className="item__details--img">
        <img src={`http://localhost:5000${image}`} />
      </div>
      <div className="item__gallery__img">
        {props.images.map((img, index) => {

          return (
            <img
              className={
                image === img.url ? "item__gallery__img--active" : ""
              }
              key={index}
              src={`http://localhost:5000${img.url}`}
              alt={`image_${index}`}
              onClick={() => setImage(img.url)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
