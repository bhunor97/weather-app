import React from "react";
// COMPONENTS
import timeZoneFunc from "../../functions/TimezoneFunc";
import LoadingSpinner from "../../components/LoadingSpinner";
import Clock from "../../icons/Clock";
// REDUX TOOLKIT
import { useSelector } from "react-redux";

const WeatherRender = () => {
  const weatherData = useSelector((state) => state.weather.value);
  const loadingWeather = useSelector((state) => state.loadingWeather.value);

  let dataNameFontType = "poppins";
  let dataNameFontWeight = "semibold";
  let dataNameFontSize = "3xl";
  let dataValuePaddingLeft = "5";

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
        <section className="grid grid-cols-3 mt-3 m-auto gap-10 min-h-[40rem] px-10 px-md-5 ">
          {/* LOCATION & WEATHER */}
          <div className="relative inset-0 bg-dataBgColor col-span-2 align-start w-max h-max p-dataContainerPadding">
            <div className="absolute bg-gray-900 bg-opacity-75"></div>
            <div className="flex flex-row items-center justify-between">
              <div className="text-dataNameSize font-dataNameWeight font-dataNameType text-dataNameColor ">
                Location:{" "}
              </div>
              <div className="pl-dataValuePaddingLeft font-dataValueType font-dataValueWeight text-dataValueSize text-dataValueColor">
                {weatherData.name} {weatherData.sys.country}
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
                className="w-16"
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
          <div className="w-max  bg-dataBgColor h-20 m-auto text-right grid content-end justify-center  p-2">
            <div className="text-dataNameSize font-dataNameWeight font-dataNameType text-dataNameColor">
              Local Time:
            </div>
            <div className="text-center font-dataValueType font-dataValueWeight text-dataValueSize text-dataValueColor">
              <Clock />
              {timeZoneFunc(weatherData.timezone)}
            </div>
          </div>

          {/* FILL */}
          <div className="bg-none w-full"></div>
        </section>
      );
    }
  };

  // console.log(weatherData);
  return <section>{renderWeatherFunc()}</section>;
};

export default WeatherRender;
