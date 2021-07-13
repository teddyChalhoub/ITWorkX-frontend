import React, { useEffect, useState } from "react";
import Card from "../../components/card/card.js";
import SubCategories from "../../components/category/category-component.js";
import "./store-page.css";
import ItemDisplay from "../../components/itemDisplay/ItemDisplay.js";
import useFetch from "../../utils/useFetch.js";

const Store = () => {

  const { loading, data: product, message, error } = useFetch(
    "http://localhost:5000/product/"
  );

  const [categories, setCategories] = useState([
    {
      id: 1,
      category: "Category 1",
      subCategory: "SubCategory 1",
    },
    {
      id: 2,
      category: "Category 2",
      subCategory: "SubCategory 2",
    },
    {
      id: 3,
      category: "Category 3",
      subCategory: "SubCategory 3",
    },
    {
      id: 4,
      category: "Category 4",
      subCategory: "SubCategory 4",
    },
    {
      id: 5,
      category: "Category 5",
      subCategory: "SubCategory 5",
    },
  ]);

  const [clicked, isClicked] = useState(false);

  return (
    <>
      {loading ? (
        <div>Loading....</div>
      ) : error ? (
        <div>{message}</div>
      ) : (
        <div className="wrapper flex-row">
          <div className="store__page--categories">
            {categories && <SubCategories categories={categories} />}
          </div>
          <div className="product__card flex">
            {product &&
              product.map((res, index) => {
                {
                  console.log("map res", res);
                }
                return (
                  <div
                    className="store__page-each-card"
                    onClick={() => {
                      window.open("http://localhost:3000/itemDisplay");
                    }}
                  >
                    <Card title={res.title} price={res.price} key={index} />
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default Store;
