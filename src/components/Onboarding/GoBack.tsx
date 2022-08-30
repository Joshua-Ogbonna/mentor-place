import React from "react";

const GoBack = ({goBack} : {goBack: () => void}) => {
  return (
    <div className="go__back">
      <i className="bx bx-left-arrow-alt" onClick={goBack}></i>
    </div>
  );
};

export default GoBack;
