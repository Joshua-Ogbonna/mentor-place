import React, { useState } from "react";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";

import "../styles/Onboarding.css";
import FirstStep from "../../components/Onboarding/FirstStep";
import SecondStep from "../../components/Onboarding/SecondStep";
import GoBack from "../../components/Onboarding/GoBack";

const Onboarding = () => {
  const [position, setPosition] = useState<number>(0);

  const handleSetPosition = () => {
    if (position < 2) {
      setPosition((position) => position + 1);
      return;
    }
  };

  const steps = [
    { name: "First Step", component: <FirstStep /> },
    { name: "Second Step", component: <SecondStep /> },
  ];
  return (
    <div className="onboarding">
      <MetaTags>
        <title>Trybe - Onboarding</title>
      </MetaTags>
      <h5>
        <Link to="/">Trybe</Link>
      </h5>
      <div className="onboarding__components shadow p-3 mb-5 bg-body rounded">
        <p>
          Getting started is easy! <br /> Enjoy unlimited community benefits{" "}
        </p>
        {position > 0 && <GoBack goBack={() => setPosition(position => position - 1)} />}
        {steps[position].component}
        <div className="form__area">
          {position < 2 && <button onClick={handleSetPosition}>Next</button>}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
