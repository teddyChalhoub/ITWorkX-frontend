import React from "react";
import Slider from "../../components/Slider/Slider";
import AboutBusiness from "../../components/AboutBusiness/AboutBusiness";
import DigitalSolution from "../../components/DigitalSolution/DigitalSolution";
import SignIn from "../../components/LoginButtons/SignIn";
import HardwareSolution from "../../components/hardwareSolution/HardwareSolution";
import "./Home.css";

const Home = () => {
  return (
    <div className="home__container">
      <Slider />
      <div className="left__triangle"></div>
      <div className="right__triangle"></div>

      <div className="home__about_business">
        <AboutBusiness />
        <SignIn />
      </div>
      <DigitalSolution />
      <div className="home__hardware-solution">
        <HardwareSolution />
      </div>
    </div>
  );
};

export default Home;
