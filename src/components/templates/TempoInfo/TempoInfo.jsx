import React from "react";

export default (props) => (
  <div className={props.divClass}>
    <div>
      {props.icon}
      {props.descricao}:
    </div>
    <div>{props.info}</div>
  </div>
);
