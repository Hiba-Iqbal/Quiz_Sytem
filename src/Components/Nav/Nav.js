import React, { useState } from "react";

import "./nav.css";
import CountDown from "../CountDown/CountDown";
import { Navigate, useNavigate } from "react-router-dom";

const Nav = (props) => {
  const navigate = useNavigate();
  const alertBox = () => {
    alert("Are You Sure to want to submit it");

    if (alert) {
      navigate("/alert");
    }
  };

  return (
    <div className="container">
      <div className="navItems">
        <div className="item1 item">
          <i className="fa fa-user-o"></i>
          <span>XXXX XXXXX - 123456</span>
        </div>
        <div className="item2 item">
          <i className="fa fa-clock-o"></i>
          <span className="firstClock">
            <CountDown seconds={1740} />
          </span>
        </div>
        <div className="item3 item">
          <i className="fa fa-volume-up"></i>
          <div className="volume">
            <div className="bar"></div>
          </div>
        </div>
        <button className="finish btn" onClick={alertBox}>
          Finish section
        </button>
        <button className="help btn">Help</button>
        <button className="hide btn">Hide</button>
      </div>
    </div>
  );
};

export default Nav;
