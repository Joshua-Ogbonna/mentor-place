import React from "react";
import { Outlet } from "react-router-dom";

const MainDashboard = () => {
  return (
    <div className="main__dashboard">
      <div className="dashboard__inner">
        <Outlet />
      </div>
    </div>
  );
};

export default MainDashboard;
