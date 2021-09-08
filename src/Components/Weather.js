import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import searchIcon from "../images/search-icon.png";
import { SpinnerDiamond } from "spinners-react";
import WeatherForecast from "./WeatherForecast";
import WeatherHighlight from "./WeatherHighlight";

import "../App.css";

export default function Weather(props) {
  let [data, setData] = useState({ ready: false });
  const [city, setCity] = useState(props.cityName);
  const [unit, setUnit] = useState("metric");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
    search();
    console.log(unit);
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("metric");
    search();
    console.log(unit);
  }

  function search() {
    let units = unit;
    console.log(units);
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

    axios.get(apiUrl).then(showWeather);
  }

  function showWeather(response) {
    console.log(response.data);
    setData({
      ready: true,
      city: response.data.name,
      temp: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      speed: response.data.wind.speed,
      description: response.data.weather[0].description,
      main: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      country: response.data.sys.country,
      icon: response.data.weather[0].icon,
      // iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (data.ready) {
    return (
      <div className="row content">
        <div className="col-md-3 left-side">
          <div className="search-form">
            <form onSubmit={handleSubmit}>
              <i className="fas fa-search"></i>
              <input
                type="search"
                placeholder="Search for place.."
                autoFocus="on"
                onChange={handleCityChange}
              />
              <button type="submit" id="submitButton">
                <img src={searchIcon} alt="search" className="img-search" />
              </button>
            </form>
          </div>
          <WeatherInfo weatherInfo={data} />
        </div>
        <div className="col-md-9 right-side">
          <div className="row header-info">
            <div className="col-md-6">
              <span className="deactivate">Today</span>
              <span>Week</span>
            </div>
            <div className="col-md-6 float-md-end">
              <a href="/" className="float-md-end" onClick={showFahrenheit}>
                °F
              </a>
              <a href="/" className="float-md-end active" onClick={showCelsius}>
                °C
              </a>
            </div>
          </div>
          <div className="row weather-forecast-days">
            <WeatherForecast />
          </div>
          <div className="weather-today-highlight">
            <WeatherHighlight />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className="spinnerDiv">
        <SpinnerDiamond />
      </div>
    );
  }
}
