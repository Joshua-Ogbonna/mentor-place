import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import HR from "../../Reusables/HR";

import "./create.css";

type Options = "Open" | "Application" | "Invite";
type AccessLevel = "Free" | "Paid";

const CreateCommunity = () => {
  const imageRef = useRef<any>(null);
  const [activeOption, setActiveOption] = useState<Options>("" as Options);
  const [accessLevel, setAccessLevel] = useState<AccessLevel>(
    "" as AccessLevel
  );
  const [questions, setQuestions] = useState([
    {
      Question: "",
      required: false,
    },
  ]);
  const [tribe, setTribe] = useState({
    name: "",
    description: "",
    logo: "",
  });

  const handleClick = () => {
    imageRef.current.click();
  };

  const handleActiveOption = (option: Options) => {
    setActiveOption(option);
  };

  const activeOptionClass = (option: string) => {
    if (activeOption === option) {
      return `active option`;
    } else {
      return `option`;
    }
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { Question: "", required: false }]);
  };

  const handleDeleteQuestion = (idx: number) => {
    // let filteredArray = []
    if (questions.length === 1) {
      alert("You must have atleast one question");
      return;
    }
    if (idx === 0) {
      let spliceQuestions = questions.slice(1);
      return setQuestions(spliceQuestions);
    }
    let spliceQuestions = questions.slice(idx);
    setQuestions(spliceQuestions);
  };

  const handleOnChangeForm =
    (idx: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuestions(
        questions.map((question, id) => {
          if (id === idx) {
            return {
              ...question,
              Question: e.target.value,
              required: question.required,
            };
          } else {
            return question;
          }
        })
      );
    };

  const handleCheckBox =
    (idx: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuestions(
        questions.map((question, id) => {
          if (id === idx) {
            return {
              ...question,
              Question: question.Question,
              required: e.target.checked,
            };
          } else {
            return question;
          }
        })
      );
    };

  return (
    <div className="create__community">
      <div className="section__head flex__two">
        <h3>Create Tribe</h3>
        <Link to="/" className="flex__one">
          <i className="bx bx-x"></i>
        </Link>
      </div>
      <HR />

      {/* Community Basic Information */}
      <div className="basic__information section">
        <h5>Basic Information</h5>
        <div className="logo flex__one">
          <div className="logo__area" onClick={handleClick}>
            <i className="bx bx-image"></i>
            <h5>Click to upload your tribe logo</h5>
          </div>
          <input ref={imageRef} type="file" style={{ display: "none" }} />
        </div>
        <div className="details">
          <div className="form__area">
            <label htmlFor="name">Tribe Name</label>
            <input type="text" name="name" placeholder="Tribe Name" />
          </div>
          <div className="form__area">
            <label htmlFor="description">Tribe Description</label>
            <textarea
              name="description"
              cols={30}
              rows={10}
              placeholder="Tribe Description"
            ></textarea>
          </div>
        </div>
      </div>
      <HR />

      <div className="section">
        <h5>Tribe Access</h5>
        <p>Choose how users join your tribe</p>

        <div className="options flex__two">
          {/* Open option */}
          <div
            className={activeOptionClass("Open")}
            onClick={() => handleActiveOption("Open")}
          >
            <i className="bx bx-globe open__option"></i>
            <h6>Open</h6>
            <p>Anyone with tribe link can join.</p>
          </div>
          {/* With application */}
          <div
            className={activeOptionClass("Application")}
            onClick={() => handleActiveOption("Application")}
          >
            <i className="bx bxs-receipt accept__option"></i>
            <h6>Accept Application</h6>
            <p>Choose who to accept into your tribe.</p>
          </div>
          {/* Invite Only */}
          <div
            className={activeOptionClass("Invite")}
            onClick={() => handleActiveOption("Invite")}
          >
            <i className="bx bxs-badge invite__option"></i>
            <h6>Invite Only</h6>
            <p>Only people with invite can join tribe.</p>
          </div>
        </div>
      </div>

      {/* Option Questions */}
      {activeOption === "Application" && (
        <div className="section questions shadow">
          {questions.map((question, idx) => (
            <div className="form__area" key={idx}>
              <label htmlFor={question[idx]}>Question {idx + 1}</label>
              <input
                type="text"
                name={question[idx]}
                placeholder={`Question ${idx + 1}`}
                value={questions[idx][`Question`]}
                onChange={handleOnChangeForm(idx)}
              />
              <div className="actions flex__two">
                <div className="required">
                  <input
                    type="checkbox"
                    name="required"
                    checked={question.required}
                    onChange={handleCheckBox(idx)}
                  />{" "}
                  Required
                </div>
                <div className="delete">
                  <i
                    className="bx bxs-trash"
                    onClick={() => handleDeleteQuestion(idx)}
                  ></i>
                </div>
              </div>
            </div>
          ))}
          <HR />
          <button onClick={handleAddQuestion}>
            <i className="bx bx-plus"></i>Add Question
          </button>
        </div>
      )}

      <HR />

      {/* Section for access level */}
      <div className="section">
        <div className="form__area">
          <label htmlFor="access_level">Access Level</label>
          <select
            name="access_level"
            value={accessLevel}
            onChange={(e) => setAccessLevel(e.target.value as AccessLevel)}
          >
            <option selected hidden>
              Select Access Level
            </option>
            <option value="Free">Free</option>
            <option value="Paid">Paid</option>
          </select>
        </div>
      </div>

      {/* Set Price for Paid tribe */}
      {accessLevel === "Paid" && (
        <>
          <div className="section">
            <div className="form__area">
              <label htmlFor="price">Set Price</label>
              <input type="number" name="tribe_fee" placeholder="Set Tribe Fee" />
            </div>
          </div>
          <div className="section">
            <div className="form__area">
              <label htmlFor="subscription_frequency">Subscrition Frequency</label>
              <select name="subscription_frequency">
                <option hidden selected>Select Frequency</option>
                <option value="One Time Off">One Time Off</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
          </div>
        </>
      )}

      {/* Create Tribe */}
      <div className="section">
        <button className="flex__one">
          <i className="bx bx-check-circle"></i> Create Tribe
        </button>
      </div>
    </div>
  );
};

export default CreateCommunity;
