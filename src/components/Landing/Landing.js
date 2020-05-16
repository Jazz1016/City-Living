import React, { useState } from "react";

const Landing = () => {
  const [userCity, setUserCity] = useState("");
  return (
    <div className="landing-holder">
      Landing.js
      <h4>Find Your Ideal City</h4>
      <input
        onChange={(e) => {
          setUserCity(e.target.value);
        }}
      />
      <button>Go</button>
      <p>compare cities</p>
    </div>
  );
};

export default Landing;
