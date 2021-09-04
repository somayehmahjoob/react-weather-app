import React from 'react';
import { IconContext } from "react-icons";
import { FaWind, FaCloudversify } from 'react-icons/fa';
import cloudy from './cloudy.png';
import searchIcon from './search-icon.png';

import './App.css';


export default function Weather(){
  return(
    <div className="row content">
        <div className="col-md-3 p-0">
          <div className="search-form">
            <form action="#">
              <i className="fas fa-search"></i>
              <input type="search" placeholder="Search for place.." />
              <button id="submitButton">
                <img src={searchIcon} alt="search" className="img-search"/>          
              </button>
            </form>
          </div>
          <div className="weather-now">
            <div className="weather-icon-now">
              <img src={cloudy} alt="cloudy" id="weather-icon-now" />              
            </div>
            <div className="weather-temp-now">12°<span>C</span></div>
            <div className="weather-date-now">
              <span id="weather-day">Monday,</span
              ><span id="weather-time">16:00</span>
              <hr />
              <div className="weather-description">
                <IconContext.Provider value={{ className: "weather-icon" }}>
                  <FaCloudversify />
                </IconContext.Provider>                
                <span id="weather-description">Mosley cloudy</span>
              </div>
              <div className="weather-wind">                
                <IconContext.Provider value={{ className: "weather-icon" }}>
                  <FaWind />
                </IconContext.Provider>
                <span id="weather-wind">Wind</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="row header-info">
            <div className="col-md-6">
              <span className="deactivate">Today</span>
              <span>Week</span>
            </div>
            <div className="col-md-6 float-md-end">
              <a href="/" className="float-md-end" id="Fahrenheit">°F</a>
              <a href="/" className="float-md-end active" id="celsius">°C</a>              
            </div>
          </div>
          <div className="row weather-forecast-days">
            <ul>
              <li className="forecast-day">
                <div>Sun</div>
                <IconContext.Provider value={{ className: "weather-icon" }}>
                  <FaWind />
                </IconContext.Provider>
                <div className="forecast-temp"><span id="temp-min">12°</span><span>-</span><span id="temp-max">18°</span></div>
              </li>
              <li className="forecast-day">
                <div>Sun</div>
                <IconContext.Provider value={{ className: "weather-icon" }}>
                  <FaWind />
                </IconContext.Provider>
                <div className="forecast-temp"><span id="temp-min">12°</span><span>-</span><span id="temp-max">18°</span></div>
              </li>
              <li className="forecast-day">
                <div>Sun</div>
                <IconContext.Provider value={{ className: "weather-icon" }}>
                  <FaWind />
                </IconContext.Provider>
                <div className="forecast-temp"><span id="temp-min">12°</span><span>-</span><span id="temp-max">18°</span></div>
              </li>
              <li className="forecast-day">
                <div>Sun</div>
                <IconContext.Provider value={{ className: "weather-icon" }}>
                  <FaWind />
                </IconContext.Provider>
                <div className="forecast-temp"><span id="temp-min">12°</span><span>-</span><span id="temp-max">18°</span></div>
              </li>
              <li className="forecast-day">
                <div>Sun</div>
                <IconContext.Provider value={{ className: "weather-icon" }}>
                  <FaWind />
                </IconContext.Provider>
                <div className="forecast-temp"><span id="temp-min">12°</span><span>-</span><span id="temp-max">18°</span></div>
              </li>
              <li className="forecast-day">
                <div>Sun</div>
                <IconContext.Provider value={{ className: "weather-icon" }}>
                  <FaWind />
                </IconContext.Provider>
                <div className="forecast-temp"><span id="temp-min">12°</span><span>-</span><span id="temp-max">18°</span></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
  
  )
  
}