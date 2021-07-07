import React from "react";
import "./Contact.css";
import { ImFacebook2 } from "react-icons/im";
import { GrTwitter, GrInstagram, GrLinkedin, GrYoutube } from "react-icons/gr";

const ContactUs = () => {
  return (
    <div>
      <div className="container">
        <div className="container__contact-us">
          <form className="app__form">
            <h1>Email Form</h1>
            <div className="app__form__contact-us">
              <input
                className="fname"
                type="text"
                id="fname"
                placeholder="Full Name"
              ></input>
              <br />
              <input
                className="mnumber"
                type="number"
                id="mnumber"
                placeholder="Mobile Number"
              ></input>
              <br />
              <input
                className="email"
                type="email"
                id="email"
                placeholder="Email"
              ></input>
              <br />
              <select className="topic" id="topic">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
              <br />
              <textarea
                className="comment"
                type="text"
                id="comment"
                placeholder="Message"
              ></textarea>
              <br />
              <button className="btn">Send Message</button>
            </div>
          </form>
          <form className="app__contact-info">
            <div className="contact-1">
              <h1>Contact us</h1>
              <p>We will answer any question that you might have</p>
            </div>
            <div className="address">
              <h3>Lebanon</h3>
              <p>Phone number: +961 3 123 456</p>
              <p>Adress: Kaslik, Lebanon</p>
            </div>
            <div className="address">
              <h3>Saudi Arabia</h3>
              <p>Phone number: +966 3 123 456</p>
              <p>Adress: Riyadh, KSA</p>
            </div>
            <div className="app__follow-us">
              <h3 className="follow-us">Follow us</h3>
              <div className="contact-us__icon">
                <ImFacebook2 color="rgba(66,104,179,255)" size="2rem" />
                <GrTwitter color="rgba(29,171,221,255)" size="2rem" />
                <GrInstagram color="rgba(201,59,140,255)" size="2rem" />
                <GrLinkedin color="rgba(2,116,179,255)" size="2rem" />
                <GrYoutube color="red" size="2rem" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
