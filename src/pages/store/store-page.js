import React, { useState } from "react";
import Card from "../../components/card/card.js";
import SubCategories from "../../components/category/category-component.js";
import "./store-page.css";
import ItemDisplay from "../../components/itemDisplay/ItemDisplay.js";

const Store = () => {
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
      <div className="nav__bar"></div>
      {clicked ? (
        <ItemDisplay />
      ) : (
        <div className="wrapper flex-row">
          <div className="store__page--categories">{categories && <SubCategories categories={categories} />}</div>
          <div className="product__card flex">
            <div
              className="store__page-each-card"
              onClick={() => {
                isClicked(true);
                // window.open("http://localhost:8000/images/1626010654937-1200px-Image_created_with_a_mobile_phone.png")
              }}
            >
              <Card />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Store;
