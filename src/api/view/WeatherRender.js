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
        <section className="border-2 h-[45rem] md:h-[40rem] lg:h-[auto] border-customBorderColor grid grid-cols-2 md:grid-cols-3 md:mt-3 gap-0 md:gap-5">
          {/* LOCATION & WEATHER */}
          <div className="border-[1px] h-[15rem] md:h-auto flex flex-col md:block justify-around relative bg-dataBgColor md:col-span-2 md:align-start w-max  p-small_dataContainerPadding md:p-dataContainerPadding">
            <div className="border-[1px]  md:w-[25rem] lg:w-[35rem] flex flex-col  md:flex-row items-start justify-between">
              <div className=" border-[1px] text-start text-small_dataNameSize lg:text-dataNameSize font-small_dataNameWeight font-dataNameType text-dataNameColor ">
                Location:{" "}
              </div>

              <div className="border-[1px] flex flex-col sm:flex-row md:pl-small_dataValuePaddingLeft font-dataValueType font-small_dataValueWeight text-small_dataValueSize lg:text-dataValueSize text-dataValueColor ">
                <div className="hidden border-[1px] md:flex items-center justify-center m-auto">
                  <CountryFlag />
                </div>
                <a
                  href={`https://en.wikipedia.org/wiki/${weatherData.name}`}
                  target="_blank"
                  className="border-[1px] border-2 border-customBorderColor transition-color duration-200 hover:bg-gray-600 py-1 px-2 rounded-md bg-gray-800"
                >
                  {weatherData.name} {weatherData.sys.country}
                </a>
                <div className="content-center md:hidden">
                  <CountryFlag />
                </div>
              </div>
            </div>

            <div className="border-[1px] flex flex-col md:flex-row justify-between">
              <div className="border-[1px] text-start text-small_dataNameSize lg:text-dataNameSize font-small_dataNameWeight font-dataNameType text-dataNameColor">
                Current weather:{" "}
              </div>
              <div className="border-[1px] text-left md:text-right md:pl-small_dataValuePaddingLeft font-dataValueType font-small_dataValueWeight text-small_dataValueSize lg:text-dataValueSize text-dataValueColor">
                {weatherData.weather[0].description}
              </div>
            </div>
          </div>

          {/* FEELS LIKE & ICON */}
          <div className="border-[1px] bg-dataBgColor h-max ml-auto grid justify-end content-start p-small_dataContainerPadding md:p-dataContainerPadding">
            <div className="border-[1px] grid text-small_dataNameSize lg:text-dataNameSize font-small_dataNameWeight font-dataNameType text-dataNameColor">
              Feels like:
            </div>
            <div className="border-[1px] font-dataValueType font-small_dataValueWeight text-small_dataValueSize lg:text-dataValueSize text-dataValueColor">
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
                className="border-[1px] w-15 md:w-20"
              />
            </div>
          </div>

          {/* LATI & LONGI & PRESSURE */}
          <div className="border-[1px] bg-dataBgColor w-max text-left grid content-around p-small_dataContainerPadding md:p-dataContainerPadding">
            <div className="border-[1px] flex flex-row items-center justify-between">
              <div className="border-[1px] text-small_dataNameSize lg:text-dataNameSize font-small_dataNameWeight font-dataNameType text-dataNameColor">
                Latitude:{" "}
              </div>
              <div className="border-[1px] pl-small_dataValuePaddingLeft font-dataValueType font-small_dataValueWeight text-small_dataValueSize lg:text-dataValueSize text-dataValueColor">
                {weatherData.coord.lat}
              </div>
            </div>

            <div className="border-[1px] flex flex-row items-center justify-between">
              <div className="border-[1px] text-small_dataNameSize lg:text-dataNameSize font-small_dataNameWeight font-dataNameType text-dataNameColor">
                Longitude:
              </div>
              <div className="border-[1px] pl-small_dataValuePaddingLeft font-dataValueType font-small_dataValueWeight text-small_dataValueSize lg:text-dataValueSize text-dataValueColor">
                {weatherData.coord.lon}
              </div>
            </div>

            <div className="border-[1px] flex flex-row items-center justify-between">
              <div className="border-[1px] text-small_dataNameSize lg:text-dataNameSize font-small_dataNameWeight font-dataNameType text-dataNameColor">
                Pressure:
              </div>
              <div className="border-[1px] pl-small_dataValuePaddingLeft font-dataValueType font-small_dataValueWeight text-small_dataValueSize lg:text-dataValueSize text-dataValueColor">
                {weatherData.main.pressure} hPa
              </div>
            </div>
          </div>

          {/* FILL */}
          <div className="border-[1px] bg-none hidden md:flex"></div>

          {/* HUMID & WIND & CLOUD */}
          <div className="border-[1px] bg-dataBgColor justify-self-end min-w-max text-right grid content-around  p-small_dataContainerPadding md:p-dataContainerPadding">
            <div>
              <div className="border-[1px] text-small_dataNameSize lg:text-dataNameSize font-small_dataNameWeight font-dataNameType text-dataNameColor">
                Humidity:
              </div>
              <div className="border-[1px] font-dataValueType font-small_dataValueWeight text-small_dataValueSize lg:text-dataValueSize text-dataValueColor">
                {weatherData.main.humidity}%
              </div>
            </div>

            <div>
              <div className="border-[1px] text-small_dataNameSize lg:text-dataNameSize font-small_dataNameWeight font-dataNameType text-dataNameColor">
                Wind Speed:
              </div>
              <div className="border-[1px] font-dataValueType font-small_dataValueWeight text-small_dataValueSize lg:text-dataValueSize text-dataValueColor">
                {weatherData.wind.speed} km/h
              </div>
            </div>

            <div>
              <div className="border-[1px] text-small_dataNameSize lg:text-dataNameSize font-small_dataNameWeight font-dataNameType text-dataNameColor">
                Cloudiness:
              </div>
              <div className="border-[1px] font-dataValueType font-small_dataValueWeight text-small_dataValueSize lg:text-dataValueSize text-dataValueColor">
                {weatherData.clouds.all}%
              </div>
            </div>
          </div>

          {/* FILL */}
          <div className="border-[1px] bg-none w-full hidden md:flex"></div>

          {/* LOCAL TIME */}
          <div className="border-[1px] w-max bg-dataBgColor h-max m-auto text-center flex-col self-center items-center p-2">
            <div className="border-[1px] text-small_dataNameSize lg:text-dataNameSize font-small_dataNameWeight font-dataNameType text-dataNameColor">
              Live Local Time:
            </div>
            <div className="border-[1px] flex flex-col align-center items-center w-max mx-auto justify-center font-dataValueType font-small_dataValueWeight text-small_dataValueSize lg:text-dataValueSize text-dataValueColor">
              <div className="border-[1px] flex flex-row justify-center">
                <Clock />
                {timeZoneFunc(weatherData.timezone)}
              </div>
            </div>
          </div>

          {/* FILL */}
          <div className="bg-none w-full hidden md:flex"></div>
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
