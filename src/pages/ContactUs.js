import React from "react";
import "./Contact.css";

const ContactUs = () => {
  return (
    <div>
      <div className="container">
        <form className="app__form">
          <h1>Email Form</h1>
          <div className="app__form__contact-us">
            <input
              className="fname"
              type="text"
              id="fname"
              placeholder="Full Name"
            ></input>
            <input
              className="mnumber"
              type="number"
              id="mnumber"
              placeholder="Mobile Number"
            ></input>
            <input
              className="email"
              type="email"
              id="email"
              placeholder="Email"
            ></input>
            <select className="topic" id="topic">
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
            <textarea
              className="comment"
              type="text"
              id="comment"
              placeholder="Message"
            ></textarea>
            <button className="btn">Send Message</button>
          </div>
        </form>
        <form className="app__contact-info">
          <div>
            <h1>Contact us</h1>
            <p>We will answer any question that you might have</p>
          </div>
          <div>
            <h3>Lebanon</h3>
            <p>Phone number: +961 3 123 456</p>
            <p>Adress: Kaslik, Lebanon</p>
          </div>
          <div>
            <h3>Saudi Arabia</h3>
            <p>Phone number: +966 3 123 456</p>
            <p>Adress: Riyadh, KSA</p>
          </div>
          <div>
            <h3>Follow us</h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
