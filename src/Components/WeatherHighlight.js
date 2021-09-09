import React from "react";
import SunTime from "./SunTime";

export default function WeatherHighlight(props){

  return (
    <div className="WeatherHighlight">
      <div className="weather-today-title">Today's Highlights</div>
      <div className="weather-today-highlight-box">
        <ul>
          <li>
            <div className="forecast-highlight-title">UV Index</div>
            <div className="forecast-highlight-content">photo or iccon</div>
            <div className="forecast-highlight-footer">footer</div>
          </li>
          <li>
            <div className="forecast-highlight-title">Win Status</div>
            <div className="forecast-highlight-content">
              <span className="details-weather">
                {props.weatherInfo.speed}
                <span className="downIcon">Km/h</span>
              </span>
            </div>
            <div className="forecast-highlight-footer">footer</div>
          </li>
          <li>
            <div className="forecast-highlight-title">Sunrise & Sunset</div>
            <SunTime
              sunrise={props.weatherInfo.sunrise}
              sunset={props.weatherInfo.sunset}
            />
            <div className="forecast-highlight-footer">footer</div>
          </li>
          <li>
            <div className="forecast-highlight-title">Humidity</div>
            <div className="forecast-highlight-content">
              <span className="details-weather">
                {props.weatherInfo.humidity}
                <span className="upIcon">%</span>
              </span>
            </div>
            <div className="forecast-highlight-footer">footer</div>
          </li>
          <li>
            <div className="forecast-highlight-title">Visibility</div>
            <div className="forecast-highlight-content">
              <span className="details-weather">
                {(props.weatherInfo.visibility * 3.6) / 1000}
                <span className="downIcon">Km/h</span>
              </span>
            </div>
            <div className="forecast-highlight-footer">footer</div>
          </li>
          <li>
            <div className="forecast-highlight-title">Air Quality</div>
            <div className="forecast-highlight-content">photo or iccon</div>
            <div className="forecast-highlight-footer">footer</div>
          </li>
        </ul>
      </div>
    </div>
  );
}