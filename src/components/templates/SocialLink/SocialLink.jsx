import "./SocialLink.css";

import React from "react";

export default (props) => (
  <a href={props.link}>
    {props.media}
    {props.name}
  </a>
);
