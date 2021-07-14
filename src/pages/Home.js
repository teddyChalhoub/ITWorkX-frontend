import React from "react";
import Slider from "../components/Slider/Slider";
import AboutBusiness from "../components/AboutBusiness";
import DigitalSolution from "../components/DigitalSolution";
import SignIn from "../components/SignIn";
import HardwareSolution from "../components/HardwareSolution";

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
