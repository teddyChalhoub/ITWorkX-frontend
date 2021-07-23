import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CardQuantity from "../cardQuantity/cardQuantity";
import "./ItemDisplay.css";
import { withRouter, useParams } from "react-router-dom";
import useFetch from "../../utils/useFetch.js";
import ProductImages from "../productImages/productImages";

const ItemDisplay = () => {
  const [quantity, setQuantity] = useState(1);
  const [images, setImages] = useState();

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
                  <button>Add to cart</button>
                  <button>Buy now</button>
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
