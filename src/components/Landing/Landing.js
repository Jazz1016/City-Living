import React, { useState } from "react";
import "./Landing.scss";
import searchImg from "./assets/magnifying-glass.svg";

const Landing = () => {
  const [userCity, setUserCity] = useState("");
  return (
    <div className="landing-holder">
      Landing.js
      <h4>Find Your Ideal City</h4>
      <input
        className="landing-input"
        onChange={(e) => {
          setUserCity(e.target.value);
        }}
      />
      <div className="button-a">Go</div>
      {/* <button>Go</button> */}
      <p>compare cities</p>
    </div>
  );
};

export default Landing;
