import React from "react";
import { Link } from "react-router-dom";
import HR from "../Reusables/HR";

const DashboardHome = () => {
  return (
    <div className="dashboard__home">
      <div className="dashboard__greetings">
        <span>Hello 👋,</span>
        <h4>John Doe</h4>
      </div>
      <HR />

      {/* Sections */}
      {/* Communities List */}
      <div className="communities__list section">
        <div className="section__head flex__two">
          <h5>Tribes</h5>
          <Link to="/new-community">
            <button>
              <i className="bx bx-plus"></i> Create
            </button>
          </Link>
        </div>
        <div className="community__lists">
          <div className="no__community">
            <i className="bx bx-loader-circle"></i>
            <h5>No Tribe</h5>
            <p>
              You don't belong to any tribe. Create one to bring members,
              resources, and calendar together
            </p>
          </div>
        </div>
      </div>
      <HR />

      {/* Events */}
      <div className="quick__links section">
        <h5>Quick Actions</h5>
        <div className="actions flex__two">
          <Link to="/create-event">
            Create Event <i className="bx bx-right-arrow-alt"></i>
          </Link>
          <Link to="/">
            Send Newsletter <i className="bx bx-right-arrow-alt"></i>
          </Link>
        </div>
      </div>
      <HR />

      {/* Recent Newsletters */}
      <div className="analysis section">
        <h5>Quick Insights</h5>
        <div className="insights flex__two">
          <Link to="/insights" className="insight">
            <div>
              <div className="insight__head flex__four">
                <div>
                  <h5>Profile Views</h5>
                  <p>All Time: 2</p>
                </div>
                <div className="number">2</div>
              </div>
            </div>
          </Link>

          <Link to="/audience" className="insight">
            <div>
              <div className="insight__head flex__four">
                <div>
                  <h5>Audience</h5>
                  <p>All Time: 2</p>
                </div>
                <div className="number">2</div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Analytics */}
    </div>
  );
};

export default DashboardHome;
