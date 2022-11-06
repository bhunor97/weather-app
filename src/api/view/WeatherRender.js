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
        <section className="grid grid-cols-3 mt-5 m-auto gap-10 min-h-[50rem] opacity-80 p-5 list-none justify-items-start text-2xl">
          <div className="bg-gray-50 col-span-2 align-start w-full text-left">
            <li>
              Location: {weatherData.name} {weatherData.sys.country}
            </li>
            <li>Current weather: {weatherData.weather[0].description}</li>
          </div>

          <div className="bg-gray-50 w-full grid justify-end content-start">
            <li>
              Feels like: {Math.round(weatherData.main.feels_like - 273.15)}°C
            </li>
            <li>
              <img
                src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                alt="weather icon"
              />
            </li>
          </div>

          <div className="bg-gray-50 w-full text-left grid content-between row-span-2">
            <li>Latitude: {weatherData.coord.lat}</li>
            <li>Longitude: {weatherData.coord.lon}</li>
            <li>Pressure: {weatherData.main.pressure} hPa</li>
          </div>

          <div className="bg-gray-50 w-full"></div>
          <div className="bg-gray-50 row-span-2 w-full text-right grid content-between">
            <li>Humidity: {weatherData.main.humidity}%</li>
            <li>Wind Speed: {weatherData.wind.speed} km/h</li>
            <li>Cloudiness: {weatherData.clouds.all}%</li>
          </div>
          <div className="bg-gray-50 w-full"></div>
          <div className="bg-gray-50 w-full"></div>
          <div className="bg-gray-50 w-full"></div>
          <div className="bg-gray-50 justify-self-end w-full text-right grid content-center">
            Local Time: {timeZoneFunc(weatherData.timezone)}
          </div>
        </section>
      );
    }
  };

  // console.log(weatherData);
  return <section>{renderWeatherFunc()}</section>;
};

export default WeatherRender;
