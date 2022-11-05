import React from "react";
// COMPONENTS
import timeZoneFunc from "../../functions/TimezoneFunc";
import LoadingSpinner from "../../components/LoadingSpinner";
// REDUX TOOLKIT
import { useSelector } from "react-redux";

const WeatherRender = () => {
  const weatherData = useSelector((state) => state.weather.value);
  const loadingWeather = useSelector((state) => state.loadingWeather.value);

  const renderWeatherFunc = () => {
    if (
      weatherData.name &&
      weatherData.sys.country &&
      weatherData.main.humidity &&
      weatherData.main.pressure &&
      weatherData.weather[0].description &&
      weatherData.weather[0].icon &&
      weatherData.wind.speed
      // weatherData.timezone
    ) {
      return (
        <div className="text-dark bg-white w-80 m-auto rounded-xl mt-5">
          <div>
            Location: {weatherData.name} {weatherData.sys.country}
          </div>
          <div>
            Feels like: {Math.round(weatherData.main.feels_like - 273.15)}°C
          </div>
          <div>Humidity: {weatherData.main.humidity}%</div>
          <div>Cloudiness: {weatherData.clouds.all}%</div>
          <div>Pressure: {weatherData.main.pressure} hPa</div>
          <div>Current weather: {weatherData.weather[0].description}</div>
          <div>Wind Speed: {weatherData.wind.speed} km/h</div>
          <div>Latitude: {weatherData.coord.lat}</div>
          <div>Longitude: {weatherData.coord.lon}</div>
          <div>Time: {timeZoneFunc(weatherData.timezone)}</div>
          <img
            src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
            alt="weather icon"
            className="m-auto"
          />
        </div>
      );
    }
  };

  // console.log(weatherData);
  return <section>{renderWeatherFunc()}</section>;
};

export default WeatherRender;
