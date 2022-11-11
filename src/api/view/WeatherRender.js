import React from "react";
// COMPONENTS
import moment from "moment";
import { useState } from "react";
import timeZoneFunc from "../../functions/TimezoneFunc";
import LoadingSpinner from "../../components/LoadingSpinner";
import Clock from "../../icons/Clock";
import CountryFlag from "../service/CountryFlag";
import { updatedTime } from "../../functions/TimezoneFunc";
// REDUX TOOLKIT
import { useSelector } from "react-redux";
// REACT SPRING
import { useSpring, animated } from "react-spring";
import { weatherFetchAnimation } from "../../animations/SpringAnimations";

const WeatherRender = () => {
  const [currentTime, setCurrentTime] = useState("");
  const weatherData = useSelector((state) => state.weather.value);
  const loadingWeather = useSelector((state) => state.loadingWeather.value);
  const localTime = weatherData.timezone ? weatherData.timezone : null;

  // console.log(weatherData);

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
        <section className="border-2 grid grid-cols-3 mt-3 gap-5">
          {/* LOCATION & WEATHER */}
          <div className="relative bg-dataBgColor col-span-2 align-start w-[30rem] xl:w-[45rem] h-max p-dataContainerPadding">
            <div className="absolute bg-gray-900 bg-opacity-75"></div>
            <div className="flex flex-row items-center justify-between">
              <div className="text-dataNameSize font-dataNameWeight font-dataNameType text-dataNameColor ">
                Location:{" "}
              </div>
              <div className="pl-dataValuePaddingLeft font-dataValueType font-dataValueWeight text-dataValueSize text-dataValueColor flex flex-row">
                {weatherData.name} {weatherData.sys.country}
                <CountryFlag />
              </div>
            </div>

            <div className="flex flex-row items-center justify-between">
              <div className="text-dataNameSize font-dataNameWeight font-dataNameType text-dataNameColor">
                Current weather:{" "}
              </div>
              <div className="pl-dataValuePaddingLeft font-dataValueType font-dataValueWeight text-dataValueSize text-dataValueColor">
                {weatherData.weather[0].description}
              </div>
            </div>
          </div>

          {/* FEELS LIKE & ICON */}
          <div className="bg-dataBgColor h-max ml-auto grid justify-end content-start p-dataContainerPadding">
            <div className="grid text-dataNameSize font-dataNameWeight font-dataNameType text-dataNameColor">
              Feels like:
            </div>
            <div className="font-dataValueType font-dataValueWeight text-dataValueSize text-dataValueColor">
              {Math.round(weatherData.main.feels_like - 273.15)}°C
            </div>
            <div className="flex items-center justify-center">
              <img
                src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                alt="weather icon"
                className="w-20"
              />
            </div>
          </div>

          {/* LATI & LONGI & PRESSURE */}
          <div className="bg-dataBgColor w-max text-left grid content-around p-dataContainerPadding">
            <div className="flex flex-row items-center justify-between">
              <div className="text-dataNameSize font-dataNameWeight font-dataNameType text-dataNameColor">
                Latitude:{" "}
              </div>
              <div className="pl-dataValuePaddingLeft font-dataValueType font-dataValueWeight text-dataValueSize text-dataValueColor">
                {weatherData.coord.lat}
              </div>
            </div>

            <div className="flex flex-row items-center justify-between">
              <div className="text-dataNameSize font-dataNameWeight font-dataNameType text-dataNameColor">
                Longitude:
              </div>
              <div className="pl-dataValuePaddingLeft font-dataValueType font-dataValueWeight text-dataValueSize text-dataValueColor">
                {weatherData.coord.lon}
              </div>
            </div>

            <div className="flex flex-row items-center justify-between">
              <div className="text-dataNameSize font-dataNameWeight font-dataNameType text-dataNameColor">
                Pressure:
              </div>
              <div className="pl-dataValuePaddingLeft font-dataValueType font-dataValueWeight text-dataValueSize text-dataValueColor">
                {weatherData.main.pressure} hPa
              </div>
            </div>
          </div>

          {/* FILL */}
          <div className="bg-none"></div>

          {/* HUMID & WIND & CLOUD */}
          <div className="bg-dataBgColor justify-self-end min-w-max text-right grid content-around  p-dataContainerPadding">
            <div>
              <div className="text-dataNameSize font-dataNameWeight font-dataNameType text-dataNameColor">
                Humidity:
              </div>
              <div className="font-dataValueType font-dataValueWeight text-dataValueSize text-dataValueColor">
                {weatherData.main.humidity}%
              </div>
            </div>

            <div>
              <div className="text-dataNameSize font-dataNameWeight font-dataNameType text-dataNameColor">
                Wind Speed:
              </div>
              <div className="font-dataValueType font-dataValueWeight text-dataValueSize text-dataValueColor">
                {weatherData.wind.speed} km/h
              </div>
            </div>

            <div>
              <div className="text-dataNameSize font-dataNameWeight font-dataNameType text-dataNameColor">
                Cloudiness:
              </div>
              <div className="font-dataValueType font-dataValueWeight text-dataValueSize text-dataValueColor">
                {weatherData.clouds.all}%
              </div>
            </div>
          </div>

          {/* FILL */}
          <div className="bg-none w-full"></div>

          {/* LOCAL TIME */}
          <div className="w-max bg-dataBgColor h-max m-auto text-center grid justify-center  p-2">
            <div className="text-dataNameSize font-dataNameWeight font-dataNameType text-dataNameColor">
              Live Local Time:
            </div>
            <div className="flex flex-col align-center items-center w-max mx-auto justify-center font-dataValueType font-dataValueWeight text-dataValueSize text-dataValueColor">
              <div className="flex flex-row justify-center">
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
