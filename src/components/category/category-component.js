import React, { useEffect, useState } from "react";
import "./category-component.css";

const SubCategories = (props) => {
  const [isShown, setIsShown] = useState({
    visibility: "block",
  });

  return (
    <div className="categories">
      <div>
        <p>Categories</p>
        {props.categories &&
          props.categories.map((category, index) => {
            return (
              <div
                className="categories__left-border"
                key={index}
                onMouseEnter={() => {
                  setIsShown({
                    visibility: "block",
                  });
                }}
                onMouseLeave={() => {
                  setIsShown({ visibility: "none" });
                }}
              >
                {category.category}

                {props.subCategories &&
                  props.subCategories.map((subCategory) => {
                    if (subCategory.parent_category === category.category) {
                      return (
                        <h3
                          className="subCategory__display"
                          onMouseEnter={() =>
                            setIsShown({
                              visibility: "block",
                            })
                          }
                          onMouseLeave={() =>
                            setIsShown({ visibility: "none" })
                          }
                          style={{
                            height: `${props.categories.length * 2.638}rem`,
                            display: isShown.visibility,
                          }}
                        >
                          {subCategory.category}
                        </h3>
                      );
                    }
                  })}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SubCategories;
