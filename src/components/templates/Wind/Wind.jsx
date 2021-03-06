import React, { Component } from "react";

import './Wind.css';
import AirInfo from "../AirInfo/AirInfo";
import { WiWindDeg, WiStrongWind } from 'react-icons/wi'
let notfound = "https://icon-library.com/images/not-found-icon/not-found-icon-24.jpg"
export default props =>
<div className="wind cards-inicio-informacoes">
    <h1>Vento e Ar</h1>
    <div>
        <h4>Velocidade e Direção</h4>
        <div className="wind_main">
            <div className="wind_main_info">
                <WiStrongWind size={30}/>
                <span>Velocidade:&nbsp;{props.wind.speed}&nbsp;Km/h</span> 
            </div>
            <div className="wind_main_info">
                <WiWindDeg size={30}/>
                <span>Direção:&nbsp;{props.wind.deg}º</span> 
            </div>
        </div>
        <hr />
        <h4>Componentes</h4>
        <div className="wind_components">
            <AirInfo name="Carbono"value={props.components.co} icon={notfound} quality={{hex: "#000", msg: "Ruim"}}/>
            <AirInfo name="Dióxido de nitrogênio" value={props.components.no2} icon={notfound} quality={{hex: "#fff", msg: "Ruim"}}/>
            <AirInfo name="Ozônio" value={props.components.o3} icon={notfound} quality={{hex: "#fff", msg: "Ruim"}}/>
            <AirInfo name="Dióxido de enxofre" value={props.components.so2} icon={notfound} quality={{hex: "#fff", msg: "Ruim"}}/>
            <AirInfo name="2.5 Microns" value={props.components.pm2_5} icon={notfound} quality={{hex: "#fff", msg: "Ruim"}}/>
            <AirInfo name="10 Microns" value={props.components.pm10} icon={notfound} quality={{hex: "#fff", msg: "Ruim"}}/>
        </div>
    </div>
</div>