import React from "react";
import './Home.css';

import Temperatura from "../templates/Temperatura/Temperatura";
import Weather from "../templates/Weather/Weather";
import Wind from "../templates/Wind/Wind";
import Moon from "../templates/Moon/Moon";

export default props =>
    <div className={`bg-themed ${props.theme} inicio-content`}>
        <div className="informacoes-content">
            <Weather {...props}/>
            <Temperatura {...props}/>
            <Wind {...props}/>
            <Moon />
        </div>
    </div>
