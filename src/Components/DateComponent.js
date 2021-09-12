import React from "react";

export default function DateComponent(props) {
  let day = props.date.getDay();
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  if (hours <= 9) {
    hours = `0${hours}`;
  }
  if (minutes <= 9) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="DateComponent">
      <span id="weather-day">{days[day]},</span>
      <span id="weather-time">
        {hours}:{minutes}
      </span>
    </div>
  );
}
