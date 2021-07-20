import React, { useEffect, useState } from "react";
import "./Slider.css";
import BtnSlider from "./ButtonsSlider/BtnSlider";
// import dataSlider from './dataSlider'

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [dataSlider, setDataSlider] = useState([
    {
      url: "https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-600w-668593321.jpg",
    },
    {
      url: "https://image.shutterstock.com/image-photo/waves-water-river-sea-meet-600w-1529923664.jpg",
    },
    {
      url: "https://image.shutterstock.com/image-illustration/nature-technology-abstract-concept-robot-600w-1072059917.jpg",
    },
    {
      url: "https://image.shutterstock.com/image-photo/majestic-sunset-mountains-landscape-wonderful-600w-1487897981.jpg",
    },
  ]);
  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {dataSlider &&
        dataSlider.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
            >
              <img src={obj.url} />
            </div>
          );
        })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: dataSlider.length }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
