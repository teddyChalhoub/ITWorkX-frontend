import React from "react";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function NavBar({ numberOfItemsInCart }) {
  return (
    <div>
      <header>
        <div className="app__navbar">
          <div className="app__navbar__img">
            <img className="logo" src="./img/LOGO.png" />
            <input
              className="app__navbar__input"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="menu">
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
            <Badge
              badgeContent={numberOfItemsInCart}
              color="secondary"
              className="cart__icon"
            >
              <ShoppingCartIcon style={{ fill: "white" }} fontSize="large" />
            </Badge>
            <AccountCircleIcon
              className="user__icon"
              style={{ fill: "white" }}
              fontSize="large"
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
