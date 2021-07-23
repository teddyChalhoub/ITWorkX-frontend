import React from "react";
import "./Slider.css";
import leftArrow from "./Icons/left-arrow.svg";
import rightArrow from "./Icons/right-arrow.svg";

const BtnSlider = ({ direction, moveSlide }) => {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
};

export default BtnSlider;
