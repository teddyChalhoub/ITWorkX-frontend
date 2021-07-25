import React, { useEffect, useState } from "react";
import "./category-component.css";

const SubCategories = (props) => {
  console.log(props.categories);
  console.log(props.subCategories);
  const [isShown, setIsShown] = useState({
    visibility: "none",
  });
  const [subCategories, setSubcategories] = useState([]);

  const handleCategoryName = (e, value) => {
    e.preventDefault();
    props.handleCategoryProduct(value);
  };

  return (
    <div className="categories">
      <div>
        <p>Categories</p>
        {props.categories &&
          props.categories.map((category, index) => {
            return (
              <div
                key={index}
                className="categories__left-border"
                onMouseEnter={() => {
                  setIsShown({
                    visibility: "block",
                  });
                }}
                onMouseLeave={() => {
                  setIsShown({ visibility: "none" });
                }}
              >
                <div onClick={(e) => handleCategoryName(e, category.category)}>
                  {category.category}
                </div>

                <div
                  className="subCategory__display"
                  onMouseEnter={() =>
                    setIsShown({
                      visibility: "block",
                    })
                  }
                  onMouseLeave={() => setIsShown({ visibility: "none" })}
                  style={{
                    display: isShown.visibility,
                  }}
                >
                  {props.subCategories &&
                    props.subCategories.map((subCategory) => {
                      console.log(subCategory.parent_category);
                      console.log(category.category);
                      if (subCategory.parent_category === category.category) {
                        console.log("entered");
                        return (
                          <h3
                            onClick={(e) =>
                              props.handleCategoryProduct(subCategory.category)
                            }
                          >
                            {subCategory.category}
                          </h3>
                        );
                      }
                    })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SubCategories;
