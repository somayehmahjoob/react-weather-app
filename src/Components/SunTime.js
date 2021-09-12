import React from 'react';
import {BrightnessAltHighFill, BrightnessAltLowFill } from "react-bootstrap-icons";

export default function SunTime(props){
  let sunriseHour =props.sunrise.getHours(); 
  let sunriseMinutes = props.sunrise.getMinutes();

  let sunsetHour = props.sunset.getHours();
  let sunsetMinutes = props.sunset.getMinutes();

  if (sunriseHour <= 9 ) {
    sunriseHour = `0${sunriseHour}`;
  }
  if (sunriseMinutes <= 9) {
    sunriseMinutes = `0${sunriseMinutes}`;
  }
    if (sunsetHour <= 9) {
      sunsetHour = `0${sunsetHour}`;
    }
    if (sunriseMinutes <= 9) {
      sunsetMinutes = `0${sunsetMinutes}`;
    }

  return (
    <div className="SunTime">
        <div className="sunrise">
          <BrightnessAltHighFill className="icon-sun-time" />
          <span>
            {sunriseHour}:{sunriseMinutes} AM
          </span>
        </div>
        <div className="sunset">
          <BrightnessAltLowFill className="icon-sun-time" />
          <span>{sunsetHour}:{sunsetMinutes} PM</span>
        </div>
    </div>
  );
}