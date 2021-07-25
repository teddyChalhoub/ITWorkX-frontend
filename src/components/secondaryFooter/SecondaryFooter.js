import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGooglePlusG,
} from "react-icons/fa";
import "./SecondaryFooter.css";

export default function secondaryFooter() {
  return (
    <div className="footer-content">
      <div className="footer-content-message">
        <h3>Get connected with us on socia media !</h3>
      </div>
      <div className="socials">
        <a  className="fa-icon-color" href="https://www.facebook.com/">
          <FaFacebook  />
        </a>

        <a className="fa-icon-color" href="https://www.instagram.com/">
          <FaInstagram />
        </a>

        <a className="fa-icon-color" href="https://www.twitter.com/">
          <FaTwitter />
        </a>

        <a className="fa-icon-color" href="https://www.google.com/gmail/">
          <FaGooglePlusG />
        </a>
      </div>
    </div>
  );
}
