import React, { useEffect, useState } from "react";
import Card from "../../components/card/card.js";
import SubCategories from "../../components/category/category-component.js";
import "./store-page.css";
import ItemDisplay from "../../components/itemDisplay/ItemDisplay.js";
import useFetch from "../../utils/useFetch.js";
import NewWindow from "react-new-window";
import { Link } from "react-router-dom";

const Store = () => {
  const {
    loading,
    data: product,
    message,
    error,
  } = useFetch("http://localhost:5000/category");

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);


  useEffect(() => {
    storeCategory(product);
  }, [product]);

  const storeCategory = (value) => {
    value.map((category) => {
      if (category.parent_category !== undefined) {
        setSubCategories([
          ...subCategories,
          {
            category: category.name,
            parent_category: category.parent_category.name,
          },
        ]);
      } else {
        setCategories([
          ...categories,
          {
            category: category.name,
          },
        ]);
      }
    });
  };

  return (
    <>
      {loading ? (
        <div>Loading....</div>
      ) : error ? (
        <div>{message}</div>
      ) : (
        <div className="wrapper flex-row">
          <div className="store__page--categories">
            {subCategories && <SubCategories categories={categories} subCategories={subCategories} />}
          </div>
          <div className="product__card flex">
            {product &&
              product.map((res) => {
                return (
                  res.product &&
                  res.product.map((product) => {
                    return (
                      <Link
                        key={product._id}
                        to={{
                          pathname: "/itemDisplay",
                          someData: { data: product },
                        }}
                      >
                        <div
                          key={product._id}
                          className="store__page-each-card"
                        >
                          <Card title={product.title} price={product.price} />
                        </div>
                      </Link>
                    );
                  })
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default Store;
