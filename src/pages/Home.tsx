import React from "react";
import Navigation from "../components/Navigation/Navigation";
import MetaTags from "react-meta-tags";

import Hero from "../components/Home/Hero";
import "./styles/Home.css"

const Home = () => {
  return (
    <div className="home__container">
      <MetaTags>
        <title>Trybe - Welcome to Trybe</title>
        <meta name="description" content="Some description." />
        <meta property="og:title" content="MyApp" />
        <meta property="og:image" content="path/to/image.jpg" />
      </MetaTags>
      <Navigation />
      <Hero />
    </div>
  );
};

export default Home;
