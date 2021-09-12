import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import { SpinnerCircular } from "spinners-react";


export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastWeather, setForecastWeather] = useState();

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinate])

  function showWeatherForecast(response) {
    setForecastWeather(response.data.daily);    
    setLoaded(true);
  }

  function handleForecast() {
    let apiKey = "469611e51569c75f911c80b0cea9dfa5";
    let lat = props.coordinate.lat;
    let lon = props.coordinate.lon;
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(showWeatherForecast);
  }


  if (loaded) {
    return (
      <div className="WeatherForecast">
        <ul>
        {forecastWeather.map((dailyWeather , index)=>{          
          if(index >=1 && index <=6){
            return (
              <div className="daily-show" key={index}>
                <WeatherForecastDay data={dailyWeather} />
              </div>
            );
          }
          else {
            return null;
          }
        })}
        </ul>
      </div>
    );
  } else {
    handleForecast();
    return (
      <div className="spinner">
        <SpinnerCircular size={20} color="#000" />
      </div>
    );
  }
}
