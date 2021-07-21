import React, { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Navbar.css";
import logo from "./LOGO.png";

function NavBar({ numberOfItemsInCart, fetchSearchValue, searchValue }) {
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = (e) => {
    e.preventDefault();
    setVisible(true);
  };

  const handleMouseLeave = (e) => {
    e.preventDefault();
    setVisible(false);
  };

  const handleInputData = (e) => {
    fetchSearchValue(e.target.value);
  };

  return (
    <div>
      <header>
        <div className="app__navbar">
          <div className="app__navbar__img">
            <img className="logo" src={logo} alt="logo" />
            <input
              className="app__navbar__input"
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={handleInputData}
            />
          </div>
          <div className="navbar__menu">
            <Link className="home links" to="/">
              Home{" "}
            </Link>
            <Link className="store links" to="/store">
              Store{" "}
            </Link>
            <Link className="contact-us links" to="/contact-us">
              Contact us{" "}
            </Link>
            <Link className="services links" to="/services">
              Services
            </Link>
            <Link className="about-us links" to="/about-us">
              About us{" "}
            </Link>

            <Link to="/cart">
              <Badge
                badgeContent={numberOfItemsInCart} //TO ADD the number of items in cart
                color="secondary"
                className="cart__icon"
              >
                <ShoppingCartIcon style={{ fill: "white" }} fontSize="large" />
              </Badge>
            </Link>

            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="app__user__icon"
            >
              <Link to="/picture">
                <AccountCircleIcon
                  className="user__icon"
                  style={{ fill: "white" }}
                  fontSize="large"
                />
              </Link>
              <div className="app__user__log-in">
                <Link
                  className="app__log-in"
                  style={{ display: visible ? "block" : "none" }}
                  to="/log-in"
                >
                  Log In
                </Link>

                <Link
                  className="app__sign-up"
                  style={{ display: visible ? "block" : "none" }}
                  to="/sign-up"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
