import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherLowerInfo(props) {
    return (
    <div>
        <h1>{props.data.city}</h1>

<ul>
    <li><FormattedDate date={props.data.date}/></li>
    <li className="text-capitalize">{props.data.description}</li>
</ul>
    <div className="row">
    <div className="col-6">
  <img src={props.data.icon} alt={props.data.description} className="weather-emoji"/>
  <div className="temperature-block">
      <span className="temperature-degree">{Math.round(props.data.temperature)}</span>
      <span className="temperature-unit">°C|°F</span>
      </div>
      </div>
    <div className="col-6">
      <ul>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind {Math.round(props.data.wind)}km/h</li>
    </ul>
    </div>
  </div>
  </div>
    )
}