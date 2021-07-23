import React from "react";
import "./cart.css";

const Cart = () => {
  return (
    <div className="cart_wrapper">
      <div className="cart__product__info--img">
        <img
          src="https://i.pinimg.com/originals/83/64/66/83646654668bf9ae412f45bb2e417ddf.jpg"
          alt=""
        />
        <div className="cart__product--product_details">
          <p>Product Title</p>
          <p>Price $</p>
        </div>
      </div>
      <div className="cart__product__info--details">
        <div className="cart__product__info--quantity">
          <p>6</p>
        </div>
        <div className="cart__product__info--price">
          <p>Price $</p>
        </div>
        <div className="cart__product__info--quit">
          <a>x</a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
