import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles/Tribe.css";
import { Tribe } from "../../utils/interfaces";

const TribeComponent = ({ tribe }: { tribe: Tribe }) => {

  const navigate = useNavigate();

  const handleButtonClick = (id: string) => {
    navigate(`/tribe/${id}`)
  }

  return (
    <div className="tribe__component flex__three shadow bg-body p-3 rounded">
      <img src={tribe.tribeProfile} alt={tribe.tribeName} />
      <div>
        <h5>{tribe.tribeName}</h5>
        <p>
          {tribe.tribeMembersNo}{" "}
          {tribe.tribeMembersNo > 1 ? "Members" : "Member"}
        </p>
      </div>
      <button onClick={() => handleButtonClick(tribe.id)}>View Group</button>
    </div>
  );
};

export default TribeComponent;
