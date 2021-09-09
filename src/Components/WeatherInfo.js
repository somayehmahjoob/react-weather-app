import React from 'react';
import DateComponent from './DateComponent';
import WeatherTemperature from "../WeatherTemperature";
import { InfoCircle } from "react-bootstrap-icons";

export default function WeatherInfo(props){
  return (
    <div className="WeatherInfo">
      <div className="weather-now">
        <div className="weather-icon-now">
          <img
            src={`/images/${props.weatherInfo.icon}.png`}
            alt={props.weatherInfo.description}
            id="weather-icon-now"
          />
        </div>
        <WeatherTemperature temp={props.weatherInfo.temp} />
        <div className="weather-date-now">
          <DateComponent date={props.weatherInfo.date} />
          <hr />
          <div className="weather-description">
            <InfoCircle className="weather-icon" />
            <span id="weather-description">
              {props.weatherInfo.description}
            </span>
          </div>
          <div className="weather-wind">
            <InfoCircle className="weather-icon" />
            <span id="weather-wind">{props.weatherInfo.main}</span>
          </div>
          <div className="weather-city-name">{props.weatherInfo.city}</div>
        </div>
      </div>
    </div>
  );
}