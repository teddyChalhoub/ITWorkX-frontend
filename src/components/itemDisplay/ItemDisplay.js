import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CardQuantity from "../cardQuantity/cardQuantity";
import "./ItemDisplay.css";

const ItemDisplay = () => {
  
  const location = useLocation();
  console.log(location.someData.data);
  const [quantity, setQuantity] = useState(1);

  const fetchQuantity = (value) => {
    setQuantity(value);
    console.log(value);
  };

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
            <div className="item__details-padding-price-to-totalPrice">
              <div className="item__details-card-price">
                <p>Price</p>
                <p>{location.someData.data.price}$</p>
              </div>
              <div className="item__details-card-quantity">
                <CardQuantity
                  fetchQuantity={fetchQuantity}
                  isItemDisplay={true}
                />
              </div>

              {location.someData.data.discount === "" ? (
                <div className="item__details-card-total-price">
                  <p>Total Price</p>
                  <p>{parseInt(location.someData.data.price) * quantity}$</p>
                </div>
              ) : (
                <>
                  <div className="item__details-card-discount">
                    <p>Discount</p>
                    <p>{location.someData.data.discount}%</p>
                  </div>
                  <div className="item__details-card-total-price">
                    <p>Total Price</p>
                    <p>
                      {parseInt(location.someData.data.price) *
                        (parseInt(location.someData.data.discount) / 100) *
                        quantity}
                      $
                    </p>
                  </div>
                </>
              )}
            </div>
            <div className="item__details-card--buttons">
              <button>Add to cart</button>
              <button>Buy now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="item__description">
        <p>{location.someData.data.description}</p>
      </div>
    </>
  );
};

export default ItemDisplay;
