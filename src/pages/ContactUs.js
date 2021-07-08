import React, { useState } from "react";
import "./Contact.css";
import { ImFacebook2 } from "react-icons/im";
import { GrTwitter, GrInstagram, GrLinkedin, GrYoutube } from "react-icons/gr";
import Grid from "@material-ui/core/Grid";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailData = {
      name,
      mobile,
      email,
      topic,
      message,
    };
    console.log("submitted values", emailData);
    // @TODO: send data email to backend
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <div className="container">
        <div className="container__contact-us">
          <Grid
            container
            alignItems={"center"}
            alignContent={"flex-end"}
            xs={12}
            md={12}
            spacing={2}
          >
            <Grid container item xs={false} md={1} />
            <Grid
              container
              item
              xs={12}
              md={4}
              alignItems={"center"}
              alignContent={"center"}
            >
              <form onSubmit={handleSubmit} className="app__form">
                <h1>Email Form</h1>
                <div className="app__form__contact-us">
                  <input
                    value={name}
                    onChange={handleNameChange}
                    className="fname"
                    type="text"
                    id="fname"
                    placeholder="Full Name"
                    required
                  ></input>
                  <br />
                  <input
                    value={mobile}
                    onChange={handleMobileChange}
                    className="mnumber"
                    type="number"
                    id="mnumber"
                    placeholder="Mobile Number"
                  ></input>
                  <br />
                  <input
                    value={email}
                    onChange={handleEmailChange}
                    className="email"
                    type="email"
                    id="email"
                    placeholder="Email"
                    required
                  ></input>
                  <br />
                  <select
                    value={topic}
                    onChange={handleTopicChange}
                    className="topic"
                    id="topic"
                    required
                  >
                    <option value="select">Select</option>
                    <option value="australia">Item enquiry</option>
                    <option value="canada">IT Support</option>
                    <option value="usa">Order Follow-up</option>
                  </select>
                  <br />
                  <textarea
                    value={message}
                    onChange={handleMessageChange}
                    className="comment"
                    type="text"
                    id="comment"
                    placeholder="Message"
                  ></textarea>
                  <br />
                  <button type="submit" className="btn">
                    Send Message
                  </button>
                </div>
              </form>
            </Grid>
            <Grid container item xs={false} md={2} />
            <Grid
              container
              item
              xs={12}
              md={4}
              alignItems={"center"}
              alignContent={"center"}
            >
              <div className="app__contact-info">
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
              </div>
            </Grid>
            <Grid container item xs={false} md={1} />
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
