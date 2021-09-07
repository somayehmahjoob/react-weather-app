import React, {useState} from 'react';
import axios from 'axios';
import { IconContext } from "react-icons";
import { WiHail, WiDayWindy } from "react-icons/wi";
import cloudy from './cloudy.png';
import searchIcon from './search-icon.png';
import RightSide from './RightSide';

import './App.css';


export default function Weather(props){
  let [data, setData] = useState({ ready: false });
  const [city, setCity] = useState(props.cityName);
  let [message, setMessage] = useState("Loading");

  function showWeather(response) {
    console.log(response.data);
    setData({
      ready:true,
      city : response.data.name,
      temp: response.data.main.temp,
      dateOfWeek : "Wen",
      dateOfHour:"20:25",
      speed: response.data.wind.speed,
      description: response.data.weather[0].description,
      main: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      sunrise :response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      country: response.data.sys.country,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city) {
      let unit = "metric";
      let apiKey = "a7edac7c339e249bf90472e14cc7ec79";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
      
      axios.get(apiUrl).then(showWeather);
    } else {
      setMessage(`please enter a city name`);
    }
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if(data.ready){
    return(
      <div className="row content">
          <div className="col-md-3 left-side">
            <div className="search-form">
              <form onSubmit={handleSubmit}>
                <i className="fas fa-search"></i>
                <input 
                  type="search" 
                  placeholder="Search for place.."  
                  onChange={handleCityChange}
                />
                <button type="submit" id="submitButton">
                  <img src={searchIcon} alt="search" className="img-search"/>          
                </button>
              </form>
            </div>
            <div className="weather-now">
              <div className="weather-icon-now">
                <img src={cloudy} alt="cloudy" id="weather-icon-now" />              
              </div>
              <div className="weather-temp-now">{Math.round(data.temp)}°<span>C</span></div>
              <div className="weather-date-now">
                <span id="weather-day">{data.dateOfWeek},</span
                ><span id="weather-time">{data.dateOfHour}</span>
                <hr />
                <div className="weather-description">
                  <IconContext.Provider value={{ className: "weather-icon" }}>
                    <WiDayWindy />
                  </IconContext.Provider>                
                  <span id="weather-description">{data.description}</span>
                </div>
                <div className="weather-wind">                
                  <IconContext.Provider value={{ className: "weather-icon" }}>
                    <WiHail />
                  </IconContext.Provider>
                  <span id="weather-wind">{data.main}</span>
                </div>
                <div className="weather-city-name">{data.city}</div>
              </div>
            </div>
          </div>
          <div className="col-md-9 right-side">
            <RightSide />
          </div>
      </div>
    )
  }
  else {
    let unit = "metric";    
    let city = props.cityName;
    let apiKey = "a7edac7c339e249bf90472e14cc7ec79";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
    axios.get(apiUrl).then(showWeather);
    return(

      
      <div>{message}</div>
    )
  }
  
}