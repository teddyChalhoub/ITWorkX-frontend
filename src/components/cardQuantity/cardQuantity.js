import React, { useState } from "react";
import "./cardQuantity.css";

const CardQuantity = (props) => {

  let [count, setCount] = useState(1);

  const minusQuantity = (e) => {
    e.preventDefault();
    if (count > 1) {
      setCount(count - 1);
      props.fetchQuantity(count - 1);
    }
  };

  const addQuantity = (e) => {
    e.preventDefault();
    setCount(count + 1);
    props.fetchQuantity(count + 1);
  };

  return (
    <>
      <div className="quantity flex">
        <button onClick={minusQuantity.bind(this)} className="minus">
          -
        </button>
        <span className="border__quantity--count">{count}</span>
        <button onClick={addQuantity.bind(this)} className="plus">
          +
        </button>
      </div>
    </>
  );
};

export default CardQuantity;
