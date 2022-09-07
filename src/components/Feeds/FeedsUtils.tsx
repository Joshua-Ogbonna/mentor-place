import React from "react";
import { tribes } from "../../assets/data/tribes";

import "./styles/FeedStyles.css";

const FeedsUtils = () => {
  return (
    <div className="feeds__utils">
      {/* Suggested Tribes */}
      <div className="suggested__tribes">
        <div className="heading">
          <h5>Suggested Tribes</h5>
        </div>
        <div className="tribes">
          {tribes.slice(0, 3).map((tribe) => (
            <div className="tribe" key={tribe.id}>
              <div className="tribe__details">
                <img src={tribe.tribeProfile} alt="" />
                <div>
                  <h5>{tribe.tribeName}</h5>
                  <p>
                    {tribe.tribeMembersNo}{" "}
                    {tribe.tribeMembersNo > 1 ? "Members" : "Member"}
                  </p>
                </div>
              </div>
              <button>Join Tribe</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedsUtils;
