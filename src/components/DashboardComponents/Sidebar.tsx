import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();
  const splitLink = pathname.split("/")

  const handleActiveLink = (link: string) => {
    if (splitLink[1] === link) {
      return "active"
    }
  }

  return (
    <div className="dashboard__sidebar">
      <div className="links">
        <Link to="/home"><h5 className="brand flex__one">t</h5></Link>
        <div className="sidebar__links">
          <Link className={handleActiveLink("")} to="/">
            <i className="bx bxs-home"></i> Home
          </Link>
          <Link className={handleActiveLink("events")} to="/events">
            <i className="bx bxs-calendar-event"></i>Events
          </Link>
          <Link className={handleActiveLink("audience")} to="/audience">
            <i className="bx bxs-user-account"></i>Audience
          </Link>
          <Link className={handleActiveLink("newsletters")} to="/newsletters">
            <i className="bx bxs-envelope-open"></i>Newsletters
          </Link>
          <Link className={handleActiveLink("insights")} to="/insights">
            <i className="bx bxs-bar-chart-alt-2"></i>Insights
          </Link>
          <Link className={handleActiveLink("Settings")} to="/Settings">
            <i className="bx bxs-cog"></i>Settings
          </Link>
        </div>
        <div className="sidebar__profile"></div>
      </div>
    </div>
  );
};

export default Sidebar;
