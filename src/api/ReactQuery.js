import React from "react";
import { useState, useEffect } from "react";
// REDUX TOOLKIT
import { useSelector } from "react-redux";
// REACT QUERY
import { useQuery } from "@tanstack/react-query";

const ReactQuery = () => {
  const location = useSelector((state) => state.location.value);
  console.log(location);

  const fetchWeather = async (queryData) => {
    console.log(queryData);
    const API_key = "6ac9ab9755c537b7ce5e67b0296360e2";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_key}`
    );
    return response.json();
  };

  const { data, status } = useQuery(["weather", location], fetchWeather);

  const renderWeatherFunc = () => {
    if (location !== "") {
      if (status === "loading") {
        return <div>Loading...</div>;
      }
      if (status === "error") {
        return <div>Error</div>;
      }
      return (
        <div className="pt-5 ">
          <li>{data.name}</li>
          <li>Feels like: {data.main.feels_like}</li>
          <li>Humidity: {data.main.humidity}</li>
          <li>Pressure: {data.main.pressure}</li>
          <li>Current data: {data.weather[0].description}</li>
          <li>Wind Speed: {data.wind.speed}</li>
        </div>
      );
    }
  };

  // RENDER
  return <section>{renderWeatherFunc()}</section>;
};

export default ReactQuery;
