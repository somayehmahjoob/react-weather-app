import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <div className="weather-temp-now">
        {Math.round(props.temp)}°<span>C</span>
      </div>
    </div>
  );
}
