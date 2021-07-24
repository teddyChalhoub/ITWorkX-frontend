import React from "react";
import "./cart-page.css";
import Cart from "../../components/cart/cart";

const CartPage = () => {
  return (
    <div className="cart__container">
      <div className="cart__container__product__details">
        <p>My Cart</p>
        <div className="cart__titles">
          <p>Product</p>
          <p>Quantity</p>
          <p>Price</p>
          <p></p>
        </div>
        <Cart />

      </div>
      <div className="cart__container__payment">
        <p>Total</p>
        <p>Price Details</p>
        <div className="cart__container__payment--subTotal">
          <p>Sub total</p>
          <p>Price $</p>
        </div>
        <div className="cart__container__payment--delivery">
          <p>Delivery</p>
          <p>10 $</p>
        </div>
        <div className="cart__container__payment--orderTotal">
          <p>OrderTotal</p>
          <p>10000$</p>
        </div>
        <button className="cart__container__btn">Place Order</button>
        <p>Payment Method:</p>
      </div>
    </div>
  );
};

export default CartPage;
