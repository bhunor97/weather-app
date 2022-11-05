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
        <section className="grid grid-cols-3 grid-rows-3 mt-5 m-auto gap-5 h-[50rem]">
          <div className="bg-white opacity-70">
            Humidity: {weatherData.main.humidity}%
          </div>
          <div className="bg-white opacity-70">
            Cloudiness: {weatherData.clouds.all}%
          </div>
          <div className="bg-white opacity-70">
            Location: {weatherData.name} {weatherData.sys.country}
          </div>
          <div className="bg-white opacity-70">
            Pressure: {weatherData.main.pressure} hPa
          </div>

          <div className="bg-white opacity-70">
            Feels like: {Math.round(weatherData.main.feels_like - 273.15)}°C
          </div>
          <div className="bg-white opacity-70">
            Current weather: {weatherData.weather[0].description}
          </div>
          <div className="bg-white opacity-70">
            Local Time: {timeZoneFunc(weatherData.timezone)}
          </div>
          <img
            src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
            alt="weather icon"
            className="bg-white opacity-70"
          />
          <div className="bg-white opacity-70">
            Latitude: {weatherData.coord.lat}
          </div>
          <div className="bg-white opacity-70">
            Longitude: {weatherData.coord.lon}
          </div>
          <div className="bg-white opacity-70"></div>
          <div className="bg-white opacity-70">
            Wind Speed: {weatherData.wind.speed} km/h
          </div>
        </section>
      );
    }
  };

  // console.log(weatherData);
  return <section>{renderWeatherFunc()}</section>;
};

export default WeatherRender;
