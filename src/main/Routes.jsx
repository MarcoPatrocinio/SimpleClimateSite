import React, { Component } from "react";

import Home from "../components/home/Home";
import { Routes, Route } from "react-router-dom";


export default props =>
    <Routes>
        <Route exact path="/" element={
            <Home theme={props.theme} ip_config={props.ip_config} weather={props.weather} air={props.air}/>
        }/>
        <Route path="/mapa" element={<Home />}/>
    </Routes>
