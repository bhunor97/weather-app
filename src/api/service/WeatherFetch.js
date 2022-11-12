import React from "react";
import { useEffect, useState } from "react";
import timeZoneFunc from "../../functions/TimezoneFunc";
// REDUX TOOLKIT
import { useSelector, useDispatch } from "react-redux";
import { setWeatherData } from "../../redux-toolkit/weatherDataSlice";
import {
  setLoadingWeatherOn,
  setLoadingWeatherOff,
} from "../../redux-toolkit/loadingWeatherSlice";
import {
  setErrorMessage,
  clearErrorMessage,
} from "../../redux-toolkit/errorSlice";

const WeatherFetch = () => {
  const location = useSelector((state) => state.location.value);
  const weatherData = useSelector((state) => state.weather.value);
  const error = useSelector((state) => state.error.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const API_key = "6ac9ab9755c537b7ce5e67b0296360e2";
    dispatch(setLoadingWeatherOn());

    const fetchWeather = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_key}`
      )
        .then((data) => {
          if (!data.ok) {
            dispatch(setLoadingWeatherOff());
            dispatch(setErrorMessage([data.status, data.statusText]));
            return data.json();
          } else if (data.ok) {
            dispatch(clearErrorMessage());
            dispatch(setLoadingWeatherOff());
            return data.json();
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
      dispatch(setWeatherData(response));
    };

    // CALL EVERY 60 SEC
    // const id = setInterval(() => {
    //   fetchWeather(); // <-- invoke in interval callback
    // }, 60000);

    fetchWeather(); // <-- invoke on mount

    // return () => clearInterval(id);
  }, [location]);

  // console.log(error);

  return <></>;
};

export default WeatherFetch;
