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
  

  function search() {
    let apiKey = "469611e51569c75f911c80b0cea9dfa5";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
    axios.get(apiUrl).then(showWeather);
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  // function showFahrenheit(event) {
  //   event.preventDefault();
  //   setUnit("imperial");
  //   setData({
  //     ready: false,
  //   });
  // }
  // function showCelsius(event) {
  //   event.preventDefault();
  //   setUnit("metric");
  //   setData({
  //     ready: false,
  //   });
  // }

  function showWeather(response) {
    setData({
      ready: true,
      city: response.data.name,
      temp: response.data.main.temp,
      coordinates : response.data.coord,
      date: new Date(response.data.dt * 1000),
      speed: response.data.wind.speed,
      description: response.data.weather[0].description,
      main: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      visibility: response.data.visibility,
      sunrise:new Date(response.data.sys.sunrise * 1000),
      sunset:new Date (response.data.sys.sunset * 1000),
      country: response.data.sys.country,
      icon: response.data.weather[0].icon,
      // iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
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
              <a href="/" className="float-md-end">
                °F
              </a>
              <a href="/" className="float-md-end active">
                °C
              </a>
            </div>
          </div>
          <div className="row weather-forecast-days">
            <WeatherForecast coordinate={data.coordinates} />
          </div>
          <div className="weather-today-highlight">
            <WeatherHighlight weatherInfo={data} />
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
