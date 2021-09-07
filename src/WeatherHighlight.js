import React from "react";

export default function WeatherHighlight(){
  return(
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
            <div className="forecast-highlight-content">photo or iccon</div>
            <div className="forecast-highlight-footer">footer</div>
          </li>
          <li>
            <div className="forecast-highlight-title">Sunrise & Sunset</div>
            <div className="forecast-highlight-content">photo or iccon</div>
            <div className="forecast-highlight-footer">footer</div>
          </li>
          <li>
            <div className="forecast-highlight-title">Humidity</div>
            <div className="forecast-highlight-content">photo or iccon</div>
            <div className="forecast-highlight-footer">footer</div>
          </li>
          <li>
            <div className="forecast-highlight-title">Visibility</div>
            <div className="forecast-highlight-content">photo or iccon</div>
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
  )
}