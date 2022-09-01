import React from "react";
import { Link } from "react-router-dom";
import Profile from "./components/Profile";
import "./styles/Profile.css";
import "./styles/FeedsNav.css";

const FeedsNav = () => {
  return (
    <div className="feeds__nav flex__two">
      <div className="brand">
        <h5>
          <Link to="/">Trybe</Link>
        </h5>
      </div>
      <div className="nav__right">
        <i className="bx bx-moon"></i>
        <i className="bx bx-bell"></i>
        <Profile />
      </div>
    </div>
  );
};

export default FeedsNav;
