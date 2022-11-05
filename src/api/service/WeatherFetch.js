import React from "react";
import { useEffect } from "react";
// REDUX TOOLKIT
import { useSelector, useDispatch } from "react-redux";
import { setWeatherData } from "../../redux-toolkit/weatherDataSlice";
import {
  setLoadingWeatherOn,
  setLoadingWeatherOff,
} from "../../redux-toolkit/loadingWeatherSlice";

const WeatherFetch = () => {
  const location = useSelector((state) => state.location.value);
  const weatherData = useSelector((state) => state.weather.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const API_key = "6ac9ab9755c537b7ce5e67b0296360e2";
    dispatch(setLoadingWeatherOn());

    const fetchWeather = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_key}`
      )
        .then((data) => {
          dispatch(setLoadingWeatherOff());
          return data.json();
        })
        .catch((error) => {
          console.log(error.message);
        });
      dispatch(setWeatherData(response));
    };
    fetchWeather();
  }, [location]);

  // console.log(weatherData);
  return <></>;
};

export default WeatherFetch;
