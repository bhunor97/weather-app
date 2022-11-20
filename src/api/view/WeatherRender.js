import React from "react";
// COMPONENTS
import moment from "moment";
import { useState } from "react";
import timeZoneFunc from "../../functions/TimezoneFunc";
import Clock from "../../icons/Clock";
import CountryFlag from "../service/CountryFlag";
import {
  temperatureFunc,
  temperatureDisplayFunc,
} from "../../functions/TemperatureFunc";

// REDUX TOOLKIT
import { useSelector } from "react-redux";
// REACT SPRING
import { useSpring, animated } from "react-spring";
import { weatherFetchAnimation } from "../../animations/SpringAnimations";
import { current } from "@reduxjs/toolkit";

const WeatherRender = () => {
  const [currentTemperature, setCurrentTemperature] = useState("Celsius");
  const weatherData = useSelector((state) => state.weather.value);
  const loadingWeather = useSelector((state) => state.loadingWeather.value);

  const renderWeatherFunc = () => {
    if (
      weatherData.name &&
      weatherData.sys.country &&
      weatherData.main.humidity &&
      weatherData.main.pressure &&
      weatherData.main.feels_like &&
      weatherData.weather[0].description &&
      weatherData.weather[0].icon &&
      weatherData.wind.speed
      // weatherData.timezone
    ) {
      return (
        <section className="border-2 border-customBorderColor grid grid-cols-2 md:grid-cols-3 mt-3 gap-5">
          {/* LOCATION & WEATHER */}
          <div className="border-[1px] relative bg-dataBgColor md:col-span-2 md:align-start md:w-[30rem] xl:w-[45rem] h-max p-dataContainerPadding">
            <div className="border-[1px] absolute bg-gray-900 bg-opacity-75"></div>
            <div className="border-[1px] flex flex-row items-center justify-between">
              <div className="border-[1px] text-start text-dataNameSize font-dataNameWeight font-dataNameType text-dataNameColor ">
                Location:{" "}
              </div>
              <div className="border-[1px] pl-dataValuePaddingLeft font-dataValueType font-dataValueWeight text-dataValueSize text-dataValueColor flex flex-row">
                <CountryFlag />
                <a
                  href={`https://en.wikipedia.org/wiki/${weatherData.name}`}
                  target="_blank"
                  className="border-[1px] border-2 border-customBorderColor transition-color duration-200 hover:bg-gray-600 py-1 px-2 rounded-md bg-gray-800"
                >
                  {weatherData.name} {weatherData.sys.country}
                </a>
              </div>
            </div>

            <div className="border-[1px] flex flex-row justify-between">
              <div className="border-[1px] text-start text-dataNameSize font-dataNameWeight font-dataNameType text-dataNameColor">
                Current weather:{" "}
              </div>
              <div className="border-[1px] text-right pl-dataValuePaddingLeft font-dataValueType font-dataValueWeight text-dataValueSize text-dataValueColor">
                {weatherData.weather[0].description}
              </div>
            </div>
          </div>

          {/* FEELS LIKE & ICON */}
          <div className="border-[1px] bg-dataBgColor h-max ml-auto grid justify-end content-start p-dataContainerPadding">
            <div className="border-[1px] grid text-dataNameSize font-dataNameWeight font-dataNameType text-dataNameColor">
              Feels like:
            </div>
            <div className="border-[1px] font-dataValueType font-dataValueWeight text-dataValueSize text-dataValueColor">
              <button
                onClick={() =>
                  temperatureFunc(currentTemperature, setCurrentTemperature)
                }
                className="border-[1px] border-2 border-customBorderColor transition-color duration-200 hover:bg-gray-600 py-1 px-2 rounded-md bg-gray-800"
              >
                {currentTemperature === "Celsius"
                  ? `${Math.round(weatherData.main.feels_like - 273.15)} °C`
                  : `${Math.round(weatherData.main.feels_like - 457.87)} °F`}
              </button>
            </div>
            <div className="border-[1px] flex items-center justify-center">
              <img
                src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                alt="weather icon"
                className="border-[1px] w-20"
              />
            </div>
          </div>

          {/* LATI & LONGI & PRESSURE */}
          <div className="border-[1px] bg-dataBgColor w-max text-left grid content-around p-dataContainerPadding">
            <div className="border-[1px] flex flex-row items-center justify-between">
              <div className="border-[1px] text-dataNameSize font-dataNameWeight font-dataNameType text-dataNameColor">
                Latitude:{" "}
              </div>
              <div className="border-[1px] pl-dataValuePaddingLeft font-dataValueType font-dataValueWeight text-dataValueSize text-dataValueColor">
                {weatherData.coord.lat}
              </div>
            </div>

            <div className="border-[1px] flex flex-row items-center justify-between">
              <div className="border-[1px] text-dataNameSize font-dataNameWeight font-dataNameType text-dataNameColor">
                Longitude:
              </div>
              <div className="border-[1px] pl-dataValuePaddingLeft font-dataValueType font-dataValueWeight text-dataValueSize text-dataValueColor">
                {weatherData.coord.lon}
              </div>
            </div>

            <div className="border-[1px] flex flex-row items-center justify-between">
              <div className="border-[1px] text-dataNameSize font-dataNameWeight font-dataNameType text-dataNameColor">
                Pressure:
              </div>
              <div className="border-[1px] pl-dataValuePaddingLeft font-dataValueType font-dataValueWeight text-dataValueSize text-dataValueColor">
                {weatherData.main.pressure} hPa
              </div>
            </div>
          </div>

          {/* FILL */}
          <div className="border-[1px] bg-none"></div>

          {/* HUMID & WIND & CLOUD */}
          <div className="border-[1px] bg-dataBgColor justify-self-end min-w-max text-right grid content-around  p-dataContainerPadding">
            <div>
              <div className="border-[1px] text-dataNameSize font-dataNameWeight font-dataNameType text-dataNameColor">
                Humidity:
              </div>
              <div className="border-[1px] font-dataValueType font-dataValueWeight text-dataValueSize text-dataValueColor">
                {weatherData.main.humidity}%
              </div>
            </div>

            <div>
              <div className="border-[1px] text-dataNameSize font-dataNameWeight font-dataNameType text-dataNameColor">
                Wind Speed:
              </div>
              <div className="border-[1px] font-dataValueType font-dataValueWeight text-dataValueSize text-dataValueColor">
                {weatherData.wind.speed} km/h
              </div>
            </div>

            <div>
              <div className="border-[1px] text-dataNameSize font-dataNameWeight font-dataNameType text-dataNameColor">
                Cloudiness:
              </div>
              <div className="border-[1px] font-dataValueType font-dataValueWeight text-dataValueSize text-dataValueColor">
                {weatherData.clouds.all}%
              </div>
            </div>
          </div>

          {/* FILL */}
          <div className="border-[1px] bg-none w-full"></div>

          {/* LOCAL TIME */}
          <div className="border-[1px] w-max bg-dataBgColor h-max m-auto text-center flex-col self-center items-center p-2">
            <div className="border-[1px] text-dataNameSize font-dataNameWeight font-dataNameType text-dataNameColor">
              Live Local Time:
            </div>
            <div className="border-[1px] flex flex-col align-center items-center w-max mx-auto justify-center font-dataValueType font-dataValueWeight text-dataValueSize text-dataValueColor">
              <div className="border-[1px] flex flex-row justify-center">
                <Clock />
                {timeZoneFunc(weatherData.timezone)}
              </div>
            </div>
          </div>

          {/* FILL */}
          <div className="bg-none w-full"></div>
        </section>
      );
    }
  };

  return (
    <div>
      <animated.div style={useSpring(weatherFetchAnimation)}>
        {renderWeatherFunc()}
      </animated.div>
    </div>
  );
};

export default WeatherRender;
