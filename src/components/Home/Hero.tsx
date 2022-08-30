import React from "react";

import "./styles/Hero.css"

const Hero = () => {
  return (
    <div className="app__container hero__container">
      <h1>The <span>all-in-one</span> community platform for creators & brands</h1>
      <p>
        Bring together engaging discussions, members, live streams, chat,
        events, and memberships — all in one place, all under your own brand.
      </p>
      <button>Get Started</button>
    </div>
  );
};

export default Hero;
