import React from "react";
import { Outlet } from "react-router-dom";

const FeedsMain = () => {
  return (
    <div className="feeds__main">
      <Outlet />
    </div>
  );
};

export default FeedsMain;
