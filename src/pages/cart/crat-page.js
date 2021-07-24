import React, { useState } from "react";
import "./cart-page.css";
import Cart from "../../components/cart/cart";
import useFetch from "../../utils/useFetch";
import Loading from "../../components/loading/loading";
import axios from "axios";

const CartPage = () => {
  const [productId, setProductId] = useState();
  const {
    loading,
    data: userOrder,
    message,
    error,
  } = useFetch("http://localhost:5000/order", {
    headers: {
      "auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGZjMzRhMWZiMjk5YjYyZjA1MzdiZGIiLCJpYXQiOjE2MjcxNDI3MTAsImV4cCI6MTYyNzc0NzUxMH0.pXJ5_WoCJSq9R3fxJuU6xo1_Ry03ISwczPEFHDnSqg0",
    },
  });

  const handleProductId = (value) => {
    console.log(value);
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/orderItem/delete/${productId}`,
        {
          headers: {
            "auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGZjMzRhMWZiMjk5YjYyZjA1MzdiZGIiLCJpYXQiOjE2MjcxNDI3MTAsImV4cCI6MTYyNzc0NzUxMH0.pXJ5_WoCJSq9R3fxJuU6xo1_Ry03ISwczPEFHDnSqg0",
          },
        }
      );

      if (!response.data.success) throw new Error(response.data.message);
      // setCount(count + 1);
      alert("deleted from cart successfully");
    } catch (err) {
      alert(err.message);
    }
  };

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
        {loading ? (
          <Loading />
        ) : error ? (
          <div>{message}</div>
        ) : (
          userOrder &&
          userOrder.orderItem &&
          userOrder.orderItem.map((cart) => {
            console.log(cart);
            return (
              cart.products && (
                <Cart
                  handleProductId={handleProductId}
                  productId={cart._id}
                  productTitle={cart.products.title}
                  productPrice={cart.products.price}
                  orderQuantity={cart.quantity}
                  orderTotalPrice={cart.totalPrice}
                />
              )
            );
          })
        )}
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
