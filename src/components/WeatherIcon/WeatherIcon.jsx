import React from "react";

import "./WeatherIcon.css";

import { WeatherSvg } from "weather-icons-animated";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "sunny",
    "clear-sky-night": "clear-night",
    "few-clouds-day": "partlycloudy",
    "few-clouds-night": "cloudy",
    "scattered-clouds-day": "cloudy",
    "scattered-clouds-night": "cloudy",
    "broken-clouds-day": "cloudy",
    "broken-clouds-night": "cloudy",
    "shower-rain-day": "rainy",
    "shower-rain-night": "rainy",
    "rain-day": "pouring",
    "rain-night": "pouring",
    "thunderstorm-day": "lightning-rainy",
    "thunderstorm-night": "lightning-rainy",
    "snow-day": "snowy",
    "snow-night": "snowy",
    "mist-day": "fog",
    "mist-night": "fog",
  };

  return (
    <span className="emoji">
      <WeatherSvg
        state={codeMapping[props.code]}
        width={props.width}
        height={props.height}
      />
    </span>
  );
}
