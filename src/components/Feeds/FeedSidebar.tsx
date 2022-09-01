import React from "react";
import { Link } from "react-router-dom";
import { messages } from "../../assets/data/messages";

import "./styles/FeedStyles.css";

const FeedSidebar = () => {
  return (
    <div className="feeds__sidebar">
      <div className="first__layer">
        <ul>
          <li>
            <Link to="">
              <i className="bx bx-group"></i> Tribes
            </Link>
          </li>
          <li>
            <Link to="">
              <i className="bx bx-copy-alt"></i> Connections
            </Link>
          </li>
          <li>
            <Link to="">
              <i className="bx bx-calendar-event"></i> Events
            </Link>
          </li>
          {/* <li>
            <Link to="">
              <i className="bx bx-building"></i> Communities
            </Link>
          </li> */}
          <li>
            <Link to="">
              <i className="bx bx-user"></i> Profile
            </Link>
          </li>
          <li>
            <Link to="">
              <i className="bx bx-cog"></i> Settings
            </Link>
          </li>
        </ul>
      </div>
      <div className="second__layer">
        <h5>Recent Messages</h5>
        <div className="recent__messages">
          {messages.map((message, idx) => (
            <div
              className="recent__message flex__two shadow-sm bg-body rounded"
              key={idx}
            >
              <div className="sender__details flex__one">
                <div className="sender__image">
                  <img src={message.senderPicture} alt={message.sender} />
                </div>
                  <div className="message__details">
                    <h5>{message.sender}</h5>
                    <span>{message.timeSent}</span>
                  </div>
              </div>
              <div className="message__action">
                <i className="bx bx-message-rounded-detail"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="third__layer">
        <button className="flex__one">
          <i className="bx bx-plus"></i> Create a Community
        </button>
      </div>
    </div>
  );
};

export default FeedSidebar;
