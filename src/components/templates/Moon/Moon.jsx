import React from "react";
import "./Moon.css";

import {
  WiMoonAltNew,
  WiMoonAltFull,
  WiMoonAltWaxingCrescent1,
  WiMoonAltFirstQuarter,
  WiMoonAltWaningGibbous3,
  WiMoonAltWaxingGibbous3,
  WiMoonAltThirdQuarter,
  WiMoonAltWaningCrescent6,
} from "react-icons/wi";
import MoonCalendar from "../MoonCalendar/MoonCalendar";

function getMoonPhase(dt, size) {
  const LUNAR_MONTH = 29.530588853;

  let time = dt.getTime();
  let tzoffset = dt.getTimezoneOffset();
  let julianDate = time / 86400000 - tzoffset / 1440 + 2440587.5;
  const normalize = (value) => {
    value = value - Math.floor(value);
    if (value < 0) value = value + 1;
    return value;
  };

  const percent = normalize((julianDate - 2451550.1) / LUNAR_MONTH);
  const age = percent * LUNAR_MONTH;
  if (age < 1.84566)
    return { fase: "Lua Nova", icone: <WiMoonAltNew size={size} /> };
  else if (age < 5.53699)
    return {
      fase: "Lua Crescente",
      icone: <WiMoonAltWaxingCrescent1 size={size} />,
    };
  else if (age < 9.22831)
    return {
      fase: "Quarto Crescente",
      icone: <WiMoonAltFirstQuarter size={size} />,
    };
  else if (age < 12.91963)
    return {
      fase: "Lua Balsâmica",
      icone: <WiMoonAltWaxingGibbous3 size={size} />,
    };
  else if (age < 16.61096)
    return { fase: "Lua Cheia", icone: <WiMoonAltFull size={size} /> };
  else if (age < 20.30228)
    return {
      fase: "Lua Gibosa",
      icone: <WiMoonAltWaningGibbous3 size={size} />,
    };
  else if (age < 23.99361)
    return {
      fase: "Quarto Minguante",
      icone: <WiMoonAltThirdQuarter size={size} />,
    };
  else if (age < 27.68493)
    return {
      fase: "Lua Minguante",
      icone: <WiMoonAltWaningCrescent6 size={size} />,
    };
  return { fase: "Lua Nova", icone: <WiMoonAltNew size={size} /> };
}
function getCalendario(size = 30) {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth();
  let last_day = new Date(year, month + 1, 0).getDate();
  let aux = "";
  let arr = new Array();
  for (let i = 1; i < last_day; i++) {
    let fase_lua = getMoonPhase(new Date(year, month, i), 30);
    if (fase_lua.fase != aux) {
      aux = fase_lua.fase;
      arr.push({
        date: new Date(year, month, i),
        icone: fase_lua.icone,
        fase: fase_lua.fase,
      });
    }
  }
  return arr;
}
export default (props) => (
  <div className="moon cards-inicio-informacoes">
    <h2>Fases da Lua</h2>
    <div>
      <h3>Atual</h3>
      <div className="Moon-Fase-Show">
        <span>{getMoonPhase(new Date(), 75).fase}</span>
        {getMoonPhase(new Date(), 75).icone}
      </div>
    </div>
    <div>
      <h2>Proximas Fase</h2>
      <div className="Moon-Calendar-Content">
        {getCalendario(25).map((k) => (
          <MoonCalendar date={k.date} icone={k.icone} fase={k.fase} />
        ))}
      </div>
    </div>
  </div>
);
