import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherConversion from "./WeatherConversion";


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

  <WeatherIcon code={props.data.icon} alt={props.data.description} width={60} height={60}/>

  <span className="temperature-block">
    <WeatherConversion celsius={props.data.temperature}/>
  </span>


    </div>
    <div className="col-6">
      <ul>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {Math.round(props.data.wind)}km/h</li>
    </ul>
    </div>
  </div>
  </div>
    )
}