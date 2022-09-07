import React from "react";

const TribeNav = () => {
  return (
    <div className="tribe__nav">
      <div className="tribe__brand">
        <h5>Doctor's Side</h5>
      </div>
      <div className="tribe__right">
        <div className="tribe__notification">
          <i className="bx bx-bell"></i>
        </div>
        <div className="tribe__settings">
          <i className="bx bx-cog"></i>
        </div>
        <div className="tribe__dp">
          <i className="bx bx-user"></i>
        </div>
      </div>
    </div>
  );
};

export default TribeNav;
