import "./Footer.css";

import React from "react";
import SocialLink from "../SocialLink/SocialLink";
import { FiLinkedin, FiGithub } from "react-icons/fi";

export default (props) => (
  <footer>
    <div className="made-by">
      <span>Feito por Marco Antônio Patrocinio</span>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        justifyContent: "flex-start",
        textAlign: "left",
        alignItems: "center",
      }}
    >
      <span>APIs utilizadas:</span>
      <div>
        <a href="https://openweathermap.org" target="_blank">
          OpenWeatherMap
        </a>
        <a href="https://ipinfo.io" target="_blank">
          IPInfo
        </a>
      </div>
    </div>
    <div className="social-links">
      <SocialLink
        link="https://www.linkedin.com/in/marcopatrocinio"
        media={<FiLinkedin />}
        name="Marco-Provedel"
      />
      <SocialLink link="#" media={<FiGithub />} name="MarcoPatrocinio" />
    </div>
  </footer>
);
