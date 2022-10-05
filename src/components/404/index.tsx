import React from "react";
import Navigation from "../Navigation/Navigation";

import "./404.css";

const NotFound = () => {
  return (
    <>
      <Navigation />
      <div className="not__found flex__one">
        <div>
          <p>You seem lost 😑</p>
          <h5>
            it's a <span>404</span>
          </h5>
          {/* <button>Back To Homepage</button> */}
        </div>
      </div>
    </>
  );
};

export default NotFound;
