import React from "react";
import "./DigitalSolution.css";

const DigitalSolution = () => {
  return (
    <div className="digital-solution__container">
      <h1 className="app__digital-solution">Digital Solutions</h1>
      <section id="pricing">
        <div className="product" id="solo">
          <img src="./img/img6.jpg" className="image" />
          <div className="product__details">
            <h3>Software Development</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              tristique porttitor rhoncus. Vestibulum in nibh bibendum, eleifend
              risus quis, pellentesque leo. Curabitur scelerisque mollis
              lacinia. Vestibulum ligula nibh, semper id vestibulum et, dapibus
              et odio. Sed in sem et lectus luctus cursus nec in nunc.
            </p>
            <button className="btn">Take a tour</button>
          </div>
        </div>
        <div className="product" id="group">
          <img src="./img/img7.jpg" className="image" />
          <div className="product__details">
            <h3>Web Designing UX UI</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              tristique porttitor rhoncus. Vestibulum in nibh bibendum, eleifend
              risus quis, pellentesque leo. Curabitur scelerisque mollis
              lacinia. Vestibulum ligula nibh, semper id vestibulum et, dapibus
              et odio. Sed in sem et lectus luctus cursus nec in nunc.
            </p>
            <button className="btn">Take a tour</button>
          </div>
        </div>
        <div className="product" id="kids">
          <img src="./img/img8.jpg" className="image" />
          <div className="product__details">
            <h3>Digital Marketing</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              tristique porttitor rhoncus. Vestibulum in nibh bibendum, eleifend
              risus quis, pellentesque leo. Curabitur scelerisque mollis
              lacinia. Vestibulum ligula nibh, semper id vestibulum et, dapibus
              et odio. Sed in sem et lectus luctus cursus nec in nunc.
            </p>
            <button className="btn">Take a tour</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalSolution;
