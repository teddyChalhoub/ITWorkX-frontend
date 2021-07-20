import React, { useEffect, useState } from "react";
import Card from "../../components/card/card.js";
import SubCategories from "../../components/category/category-component.js";
import "./store-page.css";
import ItemDisplay from "../../components/itemDisplay/ItemDisplay.js";
import useFetch from "../../utils/useFetch.js";
import { Route,Link, Switch,withRouter } from "react-router-dom";


const Store = (props) => {
  const {
    loading,
    data: product,
    message,
    error,
  } = useFetch("http://localhost:5000/category");

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    setCategories("");
    setSubCategories("");
    storeCategory(product);
  }, [product]);

  const storeCategory = (value) => {
    console.log(value);
    value.map((category) => {
      console.log("category",category)
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
            {categories && (
              <SubCategories
                categories={categories}
                subCategories={subCategories}
              />
            )}
          </div>
          <div className="product__card flex">
            {product &&
              product.map((res) => {
                return (
                  res.product &&
                  res.product.map((product) => {
                    console.log("_id",product._id)
                    return (
                      <div
                        key={product._id}
                        className="store__page-each-card"
                        onClick={()=>{
                          window.open(`/store/${product.title}`);
                        }}
                      >
                        <Card title={product.title} price={product.price} />
                      </div>
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

export default withRouter(Store);
