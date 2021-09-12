import React from "react";
import { ArrowDownCircleFill, ArrowUpCircleFill } from "react-bootstrap-icons";
import SunTime from "./SunTime";

export default function WeatherHighlight(props) {
  return (
    <div className="WeatherHighlight">
      <div className="weather-today-title">Today's Highlights</div>
      <div className="weather-today-highlight-box">
        <ul>
          <li>
            <div className="forecast-highlight-title">Temp Max & Min</div>
            <div className="forecast-highlight-content">
              <div className="icon-highlight-up">
                <ArrowUpCircleFill className="icon-sun-time" />
                {Math.round(props.weatherInfo.tempMax)}
              </div>
              <div className="icon-highlight-down">
                <ArrowDownCircleFill className="icon-sun-time" />
                {Math.round(props.weatherInfo.tempMin)}
              </div>
            </div>
          </li>
          <li>
            <div className="forecast-highlight-title">Win Status</div>
            <div className="forecast-highlight-content">
              <span className="details-weather">
                {props.weatherInfo.speed}
                <span className="downIcon">Km/h</span>
              </span>
            </div>
          </li>
          <li>
            <div className="forecast-highlight-title">Sunrise & Sunset</div>
            <div className="forecast-highlight-content">
              <SunTime
                sunrise={props.weatherInfo.sunrise}
                sunset={props.weatherInfo.sunset}
              />
            </div>
          </li>
          <li>
            <div className="forecast-highlight-title">Humidity</div>
            <div className="forecast-highlight-content">
              <span className="details-weather">
                {props.weatherInfo.humidity}
                <span className="upIcon">%</span>
              </span>
            </div>
          </li>
          <li>
            <div className="forecast-highlight-title">Visibility</div>
            <div className="forecast-highlight-content">
              <span className="details-weather">
                {(props.weatherInfo.visibility * 3.6) / 1000}
                <span className="downIcon">Km/h</span>
              </span>
            </div>
          </li>
          <li>
            <div className="forecast-highlight-title">Country & City</div>
            <div className="forecast-highlight-content">
              {props.weatherInfo.city}
              <span className="highlight-country">
                {props.weatherInfo.country}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
