import React, { useState } from "react";

const interests: string[] = [
  "Technology",
  "Religion",
  "Health",
  "Education",
  "Science",
  "Engineering",
  "Social",
  "Music",
  "Media",
  "Government",
  "Entertainment",
  "Entrepreneurship",
];

const ThirdStep = () => {
  const [choosen, setChoosen] = useState([]);

  return (
    <div className="onboarding__step">
      <form className="form__group">
        <div className="form__area">
          <label htmlFor="Interests">Tell us your interests</label>
          <div className="interests">
            {interests.map((interest, indx) => (
              <div
                className="interest flex__one shadow-sm p-3 bg-body rounded"
                key={indx}
              >
                {interest}
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ThirdStep;
