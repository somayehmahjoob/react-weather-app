import React from "react";
import WeatherForecast from './WeatherForecast';
import WeatherHighlight from "./WeatherHighlight";

export default function RightSide(){
  
  return(
    <div className="RightSide">
      <div className="row header-info">
            <div className="col-md-6">
              <span className="deactivate">Today</span>
              <span>Week</span>
            </div>
            <div className="col-md-6 float-md-end">
              <a href="/" className="float-md-end" id="Fahrenheit" >°F</a>
              <a href="/" className="float-md-end active" id="celsius">°C</a>              
            </div>
          </div>
          <div className="row weather-forecast-days">
            <WeatherForecast />
          </div>
          <div className="weather-today-highlight">
            <WeatherHighlight />  
          </div>
    </div>
  )
}