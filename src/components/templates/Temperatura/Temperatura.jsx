import './Temperatura.css';
import React from 'react';

import TempoInfo from '../TempoInfo/TempoInfo';
import SunInfo from '../SunInfo/SunInfo';

import { WiThermometer, WiHumidity, WiBarometer, WiSunrise, WiSunset, WiCelsius } from "react-icons/wi";
import { MdRemoveRedEye } from 'react-icons/md';
import sunTimer from '../../../assets/images/sun-timer.png';
import sunIcon from '../../../assets/images/sun.png'

var wi_icon_size = 25;
var md_icon_size = 20;

function intToDate(n){
    var data = new Date(n * 1000);
    return `${data.getHours()}:${data.getMinutes()}`;
}

function getSunPosition(f_n, a_n, l_n){
    let m_n = l_n - f_n;
    let r_n = l_n - a_n;
    let def = a_n === f_n ? 0 : Math.round(100-((r_n/m_n)*100))
    def = def > 100 ? 0 : def;
    return `translateY(25px) translateX(${def}px)`;
}

export default props =>
    <div className="temperature cards-inicio-informacoes">
        <h1>Clima</h1>
        <div className='clima-geral'>
            <div>
                <h2>
                    {`${Math.round(props.weather.main.temp)}`}<WiCelsius size={30}/>
                    <span className="sens_termica" style={{margin: "0"}}>Sensação Termica</span>
                </h2>
            </div>
            <div className='clima-details'>
                <SunInfo icon={<WiSunrise size={40} color="orange"/>} time={`${intToDate(props.weather.sys.sunrise)}`}/>
                <div className='sun-timer'>
                    <img className='sun-icon' src={sunIcon} alt="sun" style={
                        {transform: `${getSunPosition(props.weather.sys.sunrise,props.weather.dt,props.weather.sys.sunset)}`}
                        }/>
                    <img className='sun-bar' src={sunTimer} alt="timer"/>
                </div>
                <SunInfo icon={<WiSunset size={40} color="orange"/>} time={`${intToDate(props.weather.sys.sunset)}`}/>
            </div>
        </div>
        <div className="temperature-info-content">
            <TempoInfo divClass="temperature-info" descricao="Máx./Min."
                icon={<WiThermometer size={wi_icon_size}/>} info={`${Math.round(props.weather.main.temp_max)}º/${Math.round(props.weather.main.temp_min)}º`}/>
            <TempoInfo divClass="temperature-info" descricao="Pressão"
                icon={<WiBarometer size={wi_icon_size}/>} info={`${(props.weather.main.pressure)/1000} Atm`}/>
            <TempoInfo divClass="temperature-info" descricao="Úmidade"
                icon={<WiHumidity size={wi_icon_size}/>} info={`${Math.round(props.weather.main.humidity)}%`}/>
            <TempoInfo divClass="temperature-info" descricao="Visibilidade"
                icon={<MdRemoveRedEye size={md_icon_size}/>} info={`${props.weather.visibility/1000} Km`}/>
        </div>
    </div>