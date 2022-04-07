import React from "react";
import './Header.css';

export default props => 
<header className={`bg-themed ${props.theme}`}>
    <div className="header-content">
        <div className="header-middle">
            <nav className="nav-content">
                <a href="#" className="nav-element">
                    <h3>Inicio</h3>
                </a>
                <a href="#" className="nav-element">
                    <h3>Climas</h3>
                </a>
                <a href="#" className="nav-element">
                    <h3>Mapa</h3>
                </a>
            </nav>
        </div>
        <div className="header-right">
            <div className="initial-search">
                <input type="text" placeholder="Procure por outra Cidade"/>
            </div>
        </div>
    </div>
</header>