import React from "react";
import './MoonCalendar.css';
const d_week = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
export default props =>
<div className="Moon_Calendar_Item">
    <span className="Moon_Calendar_Day">{d_week[props.date.getDay()-1]} <br />Dia {props.date.getDate()}</span>
    {props.icone}
    <span className="Moon_Calendar_Fase">{props.fase}</span>
</div>