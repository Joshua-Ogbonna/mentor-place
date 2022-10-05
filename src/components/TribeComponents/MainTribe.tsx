import React from "react";
import { Outlet } from "react-router-dom";

const MainTribe = () => {
  return (
    <div className="main__dashboard">
      <Outlet />
    </div>
  );
};

export default MainTribe;
