import React,{useState} from "react";

export default function WeatherTemperature(props){
  const [unit, setUnit] = useState('celsius');
  
  function showCelsius(event){
    event.preventDefault();
    setUnit('celsius');
  }
  function showFahrenheit(event){
    event.preventDefault();
    setUnit('fahrenheit');
  }

  function fahrenheit(){
    return (props.temp * 9) / 5 + 32;
    
  }
  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        <div className="weather-temp-now">
          {Math.round(fahrenheit())}°
          <span>
            <a href="/" onClick={showCelsius}>
              C
            </a>
            |F
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <div className="weather-temp-now">
          {Math.round(props.temp)}°
          <span>
            C|
            <a href="/" onClick={showFahrenheit}>
              F
            </a>
          </span>
        </div>
      </div>
    );
  }
    
}