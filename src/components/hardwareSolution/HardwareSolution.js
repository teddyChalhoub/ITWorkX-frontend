import React from "react";
import "./HardwareSolution.css";
import { Link } from "react-router-dom";

const HardwareSolution = () => {
  return (
    <div className="app__HardwareSolution">
      <h3 className="HardwareSolution">IT and Hardware Solution</h3>
      <p className="app__HardwareSolution__paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique
        porttitor rhoncus. Vestibulum in nibh bibendum, eleifend risus quis,
        pellentesque leo. Curabitur scelerisque mollis lacinia. Vestibulum
        ligula nibh, semper id vestibulum et, dapibus et odio. Sed in sem et
        lectus luctus cursus nec in nunc. Suspendisse cursus erat faucibus
        imperdiet suscipit. Pellentesque ut tortor ut justo sollicitudin
        condimentum et vitae purus. Phasellus tristique porttitor diam, sit amet
        facilisis sem sagittis at. Duis bibendum feugiat libero lacinia
        convallis. Nullam sagittis massa sed dolor elementum tristique.
        Suspendisse in metus libero. Aenean ullamcorper vestibulum quam id
        sodales.
      </p>
      <div className="app__btn__shop">
        <Link to="/store">
          <button className="btn__shop" type="submit">
            CLICK HERE TO SHOP
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HardwareSolution;
