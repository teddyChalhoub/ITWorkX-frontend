import React, { useState } from "react";
import "./card.css";

const Card = () => {
  let [count, setCount] = useState(1);

  const minusQuantity = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const addQuantity = () => {
    setCount(count + 1);
  };

  return (
    <div className="card__wrapper">
      <div className="container__image">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
          alt=""
        />
      </div>
      <div>
        <p>Item Title</p>
        <div className="border__quantity__btn--card flex">
          <div className="center__price_quantity">
            <p>$500/Piece</p>

            <div className="quantity flex">
              <button onClick={minusQuantity.bind(this)} className="minus">
                -
              </button>
              <span className="border__quantity--count">{count}</span>
              <button onClick={addQuantity.bind(this)} className="plus">
                +
              </button>
            </div>
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
