import React, { useEffect, useState } from "react";
import CardQuantity from "../cardQuantity/cardQuantity";
import { Link } from "react-router-dom";
import "./ItemDisplay.css";
import { withRouter, useParams } from "react-router-dom";
import useFetch from "../../utils/useFetch.js";
import ProductImages from "../productImages/productImages";
import axios from "axios";

const ItemDisplay = () => {
  const [images, setImages] = useState();
  const [quantity, setQuantity] = useState(1);
  const [productId, setProductId] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const { title } = useParams();

  const fetchQuantity = (value) => {
    setQuantity(value);
  };

  const {
    loading,
    data: product,
    message,
    error,
  } = useFetch(`http://localhost:5000/product/${title}`);
  console.log(product);
  useEffect(() => {
    setImages(product.images);
  }, [product]);

  const handleAddToCart = async () => {
    const data = {
      product_id: productId,
      quantity: quantity,
      totalPrice: totalPrice,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/orderItem/add",
        data,
        {
          headers: {
            "auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGZiZjk3ZjFhOWY4NDNlZTM2NDgyY2EiLCJpYXQiOjE2MjcxMzAwODV9.cwN1RlnhlnAj5vv47RgZ2XyNwr31BMsvEEfQjnVt6bg",
          },
        }
      );

      if (!response.data.success)
        throw new Error("Only Logged in user are allowed");
      alert("added to cart successfully");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleTotalPrice = () => {
    if (parseInt(product.discount) !== undefined) {
      setTotalPrice(
        product.price * (parseInt(product.discount) / 100) * quantity
      );
    } else {
      setTotalPrice(product.price * quantity);
    }
  };

  useEffect(() => {
    console.log(product);
    setProductId(product._id);
    handleTotalPrice();
  }, [quantity]);

  return (
    <>
      {loading ? (
        <div>loading..</div>
      ) : error ? (
        <div>{message}</div>
      ) : (
        <>
          <div className="item__details">
            <ProductImages images={images} />

            <div className="item__details-title-card">
              <p>{product && product.title}</p>
              <p>{product && product.subTitle}</p>

              <div className="item__details-card">
                <div className="item__details-padding-price-to-totalPrice">
                  <div className="item__details-card-price">
                    <p>Price</p>
                    <p>{product && product.price}$</p>
                  </div>
                  <div className="item__details-card-quantity">
                    <CardQuantity
                      fetchQuantity={fetchQuantity}
                      isItemDisplay={true}
                    />
                  </div>

                  {product && product.discount === undefined ? (
                    <div className="item__details-card-total-price">
                      <p>Total Price</p>
                      <p>{parseInt(product.price) * quantity}$</p>
                    </div>
                  ) : (
                    <>
                      <div className="item__details-card-discount">
                        <p>Discount</p>
                        <p>{product.discount}%</p>
                      </div>
                      <div className="item__details-card-total-price">
                        <p>Total Price</p>
                        <p>
                          {parseInt(product.price) *
                            (parseInt(product.discount) / 100) *
                            quantity}
                          $
                        </p>
                      </div>
                    </>
                  )}
                </div>
                <div className="item__details-card--buttons">
                  <button onClick={handleAddToCart}>Add to cart</button>
                  <Link to="/cart" onClick={handleAddToCart}>
                    Buy now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item__description">
            <p>{product && product.description}</p>
          </div>
        </>
      )}
    </>
  );
};

export default withRouter(ItemDisplay);
