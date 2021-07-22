import React, { useEffect, useState } from "react";
import Card from "../../components/card/card.js";
import SubCategories from "../../components/category/category-component.js";
import "./store-page.css";
import ItemDisplay from "../../components/itemDisplay/ItemDisplay.js";
import useFetch from "../../utils/useFetch.js";
import { Route, Link, Switch, withRouter } from "react-router-dom";
import Slider from "../../components/ProductSlider/Slider.js";

const Store = ({ searchValue }) => {
  const {
    loading,
    data: product,
    message,
    error,
  } = useFetch("http://localhost:5000/category");

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    setCategories("");
    setSubCategories("");
    setProductData([]);
    if (product.length > 0) {
      storeCategory(product[0].categories);
      storeProducts(product[0].categories);
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

  const storeProducts = (item) => {
    item.map((category) => {
      if (category.product.length !== 0) {
        category.product.map((value) => {
          setProductData((res) => [...res, value]);
        });
      }
    });
  };

  const handleCategoryProducts = (value) => {
    product[0].categories.map((response) => {
      if (response.name === value) {
        setProductData([]);
        setProductData(response.product);
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
          {product && product[0] && <Slider images={product[0].Carousel} />}
          <div className="wrapper flex-row">
            <div className="store__page--categories">
              {categories && (
                <SubCategories
                  categories={categories}
                  subCategories={subCategories}
                  handleCategoryProduct={handleCategoryProducts}
                />
              )}
            </div>
            <div className="product__card flex">
              {productData &&
                productData
                  .filter((value) => new RegExp(searchValue).test(value.title))
                  .map((product) => {
                    console.log();
                    return (
                      <div key={product._id} className="store__page-each-card">
                        {product.images.length > 0 ? (
                          <Card
                            newItem={product.newItem}
                            image={product.images[0].url}
                            title={product.title}
                            price={product.price}
                          />
                        ) : (
                          <Card
                            newItem={product.newItem}
                            title={product.title}
                            price={product.price}
                          />
                        )}
                      </div>
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
