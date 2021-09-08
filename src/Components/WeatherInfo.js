import React from 'react';
import { IconContext } from "react-icons";
import { WiHail, WiDayWindy } from "react-icons/wi";
import DateComponent from './DateComponent';

export default function WeatherInfo(props){
  return(
    <div className="WeatherInfo">
      <div className="weather-now">
          <div className="weather-icon-now">
            <img src={`/images/${props.weatherInfo.icon}.png`} alt={props.weatherInfo.description} id="weather-icon-now" />
            
          </div>
          <div className="weather-temp-now">{Math.round(props.weatherInfo.temp)}°<span>C</span></div>
          <div className="weather-date-now">
            <DateComponent date={props.weatherInfo.date} />
            <hr />
            <div className="weather-description">
              <IconContext.Provider value={{ className: "weather-icon" }}>
                <WiDayWindy />
              </IconContext.Provider>                
              <span id="weather-description">{props.weatherInfo.description}</span>
            </div>
            <div className="weather-wind">                
              <IconContext.Provider value={{ className: "weather-icon" }}>
                <WiHail />
              </IconContext.Provider>
              <span id="weather-wind">{props.weatherInfo.main}</span>
            </div>
            <div className="weather-city-name">{props.weatherInfo.city}</div>
          </div>
        </div>
        
    </div>
  )
}