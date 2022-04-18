import './App.css';

import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { WiMoonNew } from 'react-icons/wi';

import axios from 'axios';
import Header from '../components/templates/Header/Header';
import Routes from './Routes'
import Footer from '../components/templates/Footer/Footer';

const ip_info_api_key = "5d6c3ec337e19e";
const ip_url = "http://ipinfo.io/168.181.124.62?token=" + ip_info_api_key;
const o_w_key = "3f98f3d78aed2ab1b403ee1ace7de13e";
const w_b_url = "https://api.openweathermap.org/data/2.5/weather";
const a_b_url = "http://api.openweathermap.org/data/2.5/air_pollution";
const initialState = { 
    ip_config: {city: "undefined", region: "undefined", loc: ""},
    weather: {
        weather: [{description: "undefined", icon: "01d"}],
        main: {temp:'0', feels_like: 0, temp_min: 0, temp_max: 0, pressure: 0, humidity: 0},
        visibility: 0,
        dt: 1648482534,
        wind: {speed: 0, deg: 0, gust: 0},
        sys: {sunrise: 1648106832, sunset: 1648149977}
    },
    air:{
        list: [
		{
			main: {
				aqi: 1
			},
			components: {
				co: 0,
				no: 0,
				no2: 0,
				o3: 0,
				so2: 0,
				pm2_5: 0,
				pm10: 0,
				nh3: 0
			},
        }]
    },
    moonPhase: {fase: 'Lua Nova', icone: <WiMoonNew />}
}

function getCurrentHour(n = 1648106832){
  let hour = new Date(n*1000).getHours();
  if(hour > 5 & hour < 18){
      return 'theme-day-bg';
  }
  return 'theme-night-bg';
}



export default class App extends Component{

  state = { ...initialState }

  componentDidMount(){
      axios(ip_url).then(resp =>{
          this.setState({ip_config: resp.data});
          let lat = resp.data.loc.split(',')[0];
          let lng = resp.data.loc.split(',')[1];
          return { lat, lng };
      })
      .then(r => {
          axios(w_b_url,{params: {lat: r.lat, lon: r.lng, appid: o_w_key, units: "metric", lang: "pt_br"}})
          .then(w_resp =>{
              this.setState({weather: w_resp.data});
              var lat = r.lat;
              var lng = r.lng;
              return { lat, lng };
          })
          .then(r_2 => {
              axios(a_b_url, {params: {lat: r_2.lat, lon: r_2.lng, appid: o_w_key}})
              .then(air_resp =>{
                  this.setState({air: air_resp.data});
              });
          });
      })
  }

  render() {
    return(
    <BrowserRouter>
      <Header theme={getCurrentHour(this.state.weather.dt)}/>
      <Routes theme={getCurrentHour(this.state.weather.dt)} ip_config={this.state.ip_config} weather={this.state.weather} air={this.state.air} moonPhase={this.state.moonPhase}/>
      <Footer />
    </BrowserRouter>
    )
  };
}