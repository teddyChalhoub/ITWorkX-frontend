import React, { useState } from "react";
import CardQuantity from "../cardQuantity/cardQuantity";
import "./card.css";
import newIcon from "./icons/new.png";

const Card = (props) => {
  const fetchQuantity = (value) => {
    console.log({ value });
  };

  return (
    
    <div className="card__wrapper">
      {console.log("newItem",props.newItem)}
      <div className="container__image">
        {props.image ? (
          <img
            onClick={() => {
              window.open(`/store/${props.title}`);
            }}
            src={`http://localhost:5000${props.image}`}
            alt=""
          />
        ) : (
          <img
            onClick={() => {
              window.open(`/store/${props.title}`);
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            alt=""
          />
        )}
      </div>
      <div>
        <p>{props.title}</p>
        <div className="border__quantity__btn--card flex">
          <div className="center__price_quantity">
            <p>{props.price}$/Piece</p>

            <CardQuantity fetchQuantity={fetchQuantity} />
          </div>
          <input
            type="button"
            className="button__add-to-card"
            value="Add to cart"
          />
        </div>
      </div>
      {props.newItem ? (
        <img className="card__new__icon" src={newIcon} alt="New Icon" />
      ) : null}
    </div>
  );
};

export default Card;
