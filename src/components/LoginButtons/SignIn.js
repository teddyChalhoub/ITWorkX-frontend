import React from "react";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="app__sign-in-out">
      <button className="btn" type="submit">
        Sign Up
      </button>
      <button className="btn" type="submit">
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
