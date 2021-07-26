import React, { useEffect, useState } from "react";
import "./category-component.css";

const SubCategories = (props) => {
  console.log(props.categories);
  console.log(props.subCategories);
  const [isShown, setIsShown] = useState({
    visibility: "none",
  });
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubcategories] = useState([]);

  const handleCategoryName = (e, value) => {
    e.preventDefault();
    props.handleCategoryProduct(value);
  };

  const handleCategoriesArray = () => {
    const array = props.categories.filter( (item, pos, self) => {
      console.log(self.indexOf(item) == pos);
      return self.indexOf(item) !== pos;
    });
    console.log(array);
  };

  useEffect(() => {
    handleCategoriesArray();
  }, []);

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
                  setSubcategories(category.subCategory);
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
              </div>
            );
          })}
      </div>
      {subCategories && (
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
          {subCategories.map((subCategory) => {
            return (
              <h3
                onClick={(e) => props.handleCategoryProduct(subCategory.name)}
              >
                {subCategory.name}
              </h3>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SubCategories;
