import React from "react";
import ReactDropdown from "react-dropdown";

import "../styles/Tribes.css";
import MetaTagComponent from "../../Reusables/MetaTags";
import { tribes } from "../../../assets/data/tribes";
import Tribe from "../../Reusables/Tribe";
import Navigation from "../../Navigation/Navigation";

const Tribes = () => {
  return (
    <div className="tribes__section">
      <MetaTagComponent title="Trybe - Tribes" />

      {/* Trybes Filter Section */}
      <Navigation />
      <div className="tribes__container">
        <div className="tribes__filter flex__two shadow">
          <div className="first__filter flex__three">
            <i className="bx bx-search"></i>
            <ReactDropdown
              options={["Religion", "Finance"]}
              placeholder="Select Filter"
            />
          </div>
          <div className="right__filter">
            <button className="shadow p-3 rounded flex__one">
              <i className="bx bx-plus"></i> Create Tribe
            </button>
          </div>
        </div>

        {/* Your Tribes */}
        <div className="your__tribes">
          <h5>Your Tribes</h5>
          <div className="tribes flex__two">
            {tribes.map((tribe) => (
              <Tribe tribe={tribe} />
            ))}
          </div>
        </div>

        {/* Recommended Tribes */}
        <div className="your__tribes">
          <h5>Recommended Tribes</h5>
          <div className="tribes flex__two">
            {tribes.map((tribe) => (
              <Tribe tribe={tribe} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tribes;
