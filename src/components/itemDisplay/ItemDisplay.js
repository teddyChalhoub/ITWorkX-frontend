import React from "react";
import { useLocation } from "react-router-dom";
import CardQuantity from "../cardQuantity/cardQuantity";
import "./ItemDisplay.css";

const ItemDisplay = () => {
  const location = useLocation();
  console.log(location.someData.data);
  return (
    <>
      <div className="item__details">
        <img
          className="item__details--img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
        />

        <div className="item__details-title-card">
          <p>{location.someData.data.title}</p>
          <p>{location.someData.data.subTitle}</p>

          <div className="item__details-card">
            <div className="item__details-card-price">
              <p>Price</p>
              <p>{location.someData.data.price}$</p>
            </div>
            <div className="item__details-card-quantity">
              <CardQuantity isItemDisplay={true} />
            </div>
            <div className="item__details-card-discount">
              <p>Discount</p>
              <p>
                {location.someData.data.discount !== 0
                  ? ""
                  : `${location.someData.data.discount}%`}
              </p>
            </div>
            <div className="item__details-card-total-price">
              <p>Total Price</p>
              <p>{location.someData.data.price}$</p>
            </div>
            <div className="item__details-card--buttons">
              <button>Add to cart</button>
              <button>Buy now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="item__description">
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </p>
      </div>
    </>
  );
};

export default ItemDisplay;
