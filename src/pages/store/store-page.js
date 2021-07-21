import React, { useEffect, useState } from "react";
import Card from "../../components/card/card.js";
import SubCategories from "../../components/category/category-component.js";
import "./store-page.css";
import ItemDisplay from "../../components/itemDisplay/ItemDisplay.js";
import useFetch from "../../utils/useFetch.js";
import { Route, Link, Switch, withRouter } from "react-router-dom";
import Slider from "../../components/ProductSlider/Slider.js";

const Store = () => {
  const {
    loading,
    data: product,
    message,
    error,
  } = useFetch("http://localhost:5000/category");
  console.log({ product: product });

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    setCategories("");
    setSubCategories("");
    if (product.length > 0) {
      storeCategory(product[0].categories);
    }
  }, [product]);

  const storeCategory = (value) => {
    value.map((category) => {
      if (category.parent_category !== undefined) {
        setSubCategories((response) => [
          ...response,
          {
            category: category.name,
            parent_category: category.parent_category.name,
          },
        ]);
      } else {
        setCategories((response) => [
          ...response,
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
        <>
          {product && product[0].Carousel && <Slider images={product[0].Carousel} />}
          <div className="wrapper flex-row">
            <div className="store__page--categories">
              {console.log("categories", categories)}
              {categories && (
                <SubCategories
                  categories={categories}
                  subCategories={subCategories}
                />
              )}
            </div>
            <div className="product__card flex">
              {product &&
                product[0].categories.map((res) => {
                  return (
                    res.product &&
                    res.product.map((product) => {
                      return (
                        <div
                          key={product._id}
                          className="store__page-each-card"
                        >
                          {product.images.length > 0 ? (
                            <Card
                              image={product.images[1].url}
                              title={product.title}
                              price={product.price}
                            />
                          ) : (
                            <Card title={product.title} price={product.price} />
                          )}
                        </div>
                      );
                    })
                  );
                })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default withRouter(Store);
