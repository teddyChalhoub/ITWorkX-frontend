import React from "react";
import "./cart-page.css";
import Cart from "../../components/cart/cart"

const CartPage = () => {
  return (
    <div className="cart__container">
      <p>My Cart</p>
      <div className="cart__titles">
        <p>Product</p>
        <p>Quantity</p>
        <p>Price</p>
        <p></p>
      </div>
      <Cart />
      <Cart />
      <Cart />
      <Cart />
      <Cart />
      <Cart />
    </div>
  );
};

export default CartPage;
