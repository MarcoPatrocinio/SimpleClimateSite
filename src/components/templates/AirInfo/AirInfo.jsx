import React from "react";
import "./AirInfo.css";
import { MdOutlineEqualizer } from "react-icons/md";

export default (props) => (
  <div className="air_info_content">
    <div className="air_info_img">
      <span style={{ fontSize: "0.625rem" }}>{props.name}</span>
      <svg width="51" height="51" style={{borderRadius: "50%"}}>
        <circle r="25.5" cx="25.5" cy="25.5" transform="rotate(90 25.5 25.5)" style={{strokeWidth: "10px", fill: "rgba(255, 255, 255, 0.8)"}}></circle>
        <circle r="25.5" cx="25.5" cy="25.5" transform="rotate(90 25.5 25.5)" style={{strokeWidth: "10px", strokeDasharray: "14.407075 396.442451", stroke: "#00E89D", fill: "rgba(172,172,172,0.25"}}></circle>
        <text x="35%" y="55%">50</text>
      </svg>
      <span>
          {props.value} <span style={{ fontSize: "0.625rem" }}>μg/m3</span>
      </span>
      <div className="air_info_value">
      </div>
    </div>
  </div>
);
