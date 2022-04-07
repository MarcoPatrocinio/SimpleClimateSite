import React from "react";
import './AirInfo.css';
import { MdOutlineEqualizer } from 'react-icons/md';

export default props =>
<div className="air_info_content">
    <div className="air_info_img">
        <img src={props.icon} width={35} height={35}/>
        <span style={{fontSize: '0.625rem'}}>{props.name}</span>
        <div className="air_info_value">
            <span>{props.value} <span style={{fontSize: '0.625rem'}}>μg/m3</span></span>
        </div>
    </div>
    <div className="el-rating">
        <MdOutlineEqualizer size={30} color={props.quality.hex}/>
        <span>{props.quality.msg}</span>
    </div>
</div>