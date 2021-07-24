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
        <p>Price Details</p>
        <div className="cart__container__payment--subTotal">
          <p>Subtotal</p>
          <p>Price $</p>
        </div>
        <div className="cart__container__payment--delivery">
          <p>Delivery</p>
          <p>10 $</p>
        </div>
        <div className="cart__container__payment--orderTotal">
          <p>Total</p>
          <p>10000$</p>
        </div>
        <button className="cart__container__btn">Place Order</button>

        <div className="cart__payment__method--cash">
          <p>Payment Method</p>
          <label className="payment" for="cash">
            Cash on delivery
            <input type="radio" id="cash" name="payment" />
            <span className="checkmark"></span>
          </label>

          <label className="payment" for="omt">
            OMT
            <input type="radio" id="omt" name="payment" />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
