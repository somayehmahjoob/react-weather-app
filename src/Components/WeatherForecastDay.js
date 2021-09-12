import React from 'react';

export default function WeatherForecastDay(props){
  function showDay() {
    let dateTime = new Date(props.data.dt * 1000);
    let day = dateTime.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <li className="forecast-day">
      <div id="day-of-week">{showDay()}</div>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`}
          alt={props.data.weather[0].description}
        />
      </div>
      <div className="forecast-temp">
        <span id="temp-max">{Math.round(props.data.temp.max)}°</span>
        <span id="temp-min">{Math.round(props.data.temp.min)}°</span>
      </div>
    </li>
  );
}