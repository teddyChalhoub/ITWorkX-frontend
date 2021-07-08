import React, { useState } from "react";
import Card from "../../components/card/card.js";
import SubCategories from "../../components/category/category-component.js";
import "./store-page.css";
import { isElement } from "react-dom/cjs/react-dom-test-utils.production.min";

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
      subCategory:"SubCategory 5",
    },
    
   
  
  ]);

  return (
    <>
      <div className="nav__bar"></div>

      <div className="wrapper flex-row">
 
          {categories && <SubCategories categories={categories} />}

        <div className="product__card flex">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Store;
