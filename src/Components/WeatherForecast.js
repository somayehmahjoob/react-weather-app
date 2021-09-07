import React from "react";
import { IconContext } from "react-icons";
import { WiHail, WiMoonAltNew, WiDaySnowWind, WiDayWindy, WiDaySnow } from "react-icons/wi";


export default function WeatherForecast(){
  return(
    <div className="WeatherForecast">
      <ul>
              <li className="forecast-day">
                <div id="day-of-week">Sun</div>
                <IconContext.Provider value={{ className: "weather-forecast-icon" }}>
                  <WiHail />
                </IconContext.Provider>
                <div className="forecast-temp"><span id="temp-max">18°</span><span id="temp-min">12°</span></div>
              </li>
              <li className="forecast-day">
                <div id="day-of-week">Sun</div>
                <IconContext.Provider value={{ className: "weather-forecast-icon" }}>
                  <WiDaySnow />
                </IconContext.Provider>
                <div className="forecast-temp"><span id="temp-max">18°</span><span id="temp-min">12°</span></div>
              </li>
              <li className="forecast-day">
                <div id="day-of-week">Sun</div>
                <IconContext.Provider value={{ className: "weather-forecast-icon" }}>
                  <WiDayWindy />
                </IconContext.Provider>
                <div className="forecast-temp"><span id="temp-max">18°</span><span id="temp-min">12°</span></div>
              </li>
              <li className="forecast-day">
                <div id="day-of-week">Sun</div>
                <IconContext.Provider value={{ className: "weather-forecast-icon" }}>
                  <WiMoonAltNew />
                </IconContext.Provider>
                <div className="forecast-temp"><span id="temp-max">18°</span><span id="temp-min">12°</span></div>
              </li>
              <li className="forecast-day">
                <div id="day-of-week">Sun</div>
                <IconContext.Provider value={{ className: "weather-forecast-icon" }}>
                  <WiDayWindy />
                </IconContext.Provider>
                <div className="forecast-temp"><span id="temp-max">18°</span><span id="temp-min">12°</span></div>
              </li>
              <li className="forecast-day">
                <div id="day-of-week">Sun</div>
                <IconContext.Provider value={{ className: "weather-forecast-icon" }}>
                  <WiDaySnowWind />
                </IconContext.Provider>
                <div className="forecast-temp"><span id="temp-max">18°</span><span id="temp-min">12°</span></div>
              </li>     
            </ul>
    </div>
  )
}