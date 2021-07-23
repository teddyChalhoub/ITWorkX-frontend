import React from "react";
import Slider from "../../components/Slider/Slider";
import AboutBusiness from "../../components/AboutBusiness/AboutBusiness";
import DigitalSolution from "../../components/DigitalSolution/DigitalSolution";
import SignIn from "../../components/LoginButtons/SignIn";
import HardwareSolution from "../../components/hardwareSolution/HardwareSolution";

const Home = () => {
  return (
    <div>
      <Slider />
      <AboutBusiness />
      <SignIn />
      <DigitalSolution />
      <HardwareSolution />
    </div>
  );
};

export default Home;
