import React, { useState } from "react";
import CardQuantity from "../cardQuantity/cardQuantity";
import "./card.css";

const Card = (props) => {
  {console.log(props)}
  return (
    <div className="card__wrapper">
      <div className="container__image">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
          alt=""
        />
      </div>
      <div>
        <p>{props.title}</p>
        <div className="border__quantity__btn--card flex">
          <div className="center__price_quantity">
            <p>{props.price}$/Piece</p>

            <CardQuantity/>
          </div>
          <input
            type="button"
            className="button__add-to-card"
            value="Add to cart"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
