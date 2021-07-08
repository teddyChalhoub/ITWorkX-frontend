import React, { useEffect, useState } from "react";
import "./category-component.css";

const SubCategories = (props) => {
  const [isShown, setIsShown] = useState({
    visibility: "block",
  });

  const [subCategory, setSubCategory] = useState("");

  return (
    <div className="categories">
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
                setSubCategory(category.subCategory);
              }}
              onMouseLeave={() => {
                setIsShown({ visibility: "none" });
              }}
            >
              {category.category}
            </div>
          );
        })}
      {subCategory && ( 
        <h3
          onMouseEnter={() =>
            setIsShown({
              visibility: "block",
            })
          }
          onMouseLeave={() => setIsShown({ visibility: "none" })}
          style={{
            height: `${props.categories.length * 2.638}rem`,
            display: isShown.visibility,
          }}
          className=""
        >
          {subCategory}
        </h3>
      )}
    </div>
  );
};

export default SubCategories;
