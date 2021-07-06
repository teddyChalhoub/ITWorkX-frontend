import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";

function NavBar() {
  return (
    <header>
      <div className="app__navbar">
        <div className="app__navbar__img">
          <img src="./img/LOGO.png" />
          <input
            className="app__navbar__input"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="app__navbar__menu">
          <div className="menu">
            <Link className="home" to="/">
              Home{" "}
            </Link>
          </div>
          <div className="menu">
            <Link className="store" to="/store">
              Store{" "}
            </Link>
          </div>
          <div className="menu">
            <Link className="contact-us" to="/contact-us">
              Contact us{" "}
            </Link>
          </div>
          <div className="menu">
            <Link className="services" to="/services">
              Services
            </Link>
          </div>
          <div className="menu">
            <Link className="about-us" to="/about-us">
              About us{" "}
            </Link>
          </div>
          <div className="icons">
            <div className="cart__icon">
              <FaShoppingCart size="2em" color="white" />
            </div>
            <div className="user__icon">
              <BiUserCircle size="3.5em" color="white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
