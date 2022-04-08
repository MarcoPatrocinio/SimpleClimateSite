import React from "react";
import "./SunInfo.css";

export default (props) => (
  <div className="SunInfo">
    {props.icon}
    <b>{props.time}</b>
  </div>
);
