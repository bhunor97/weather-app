import React from "react";
// REDUX TOOLKIT
import { useSelector } from "react-redux";

const CountryFlag = () => {
  const weatherData = useSelector((state) => state.weather.value);
  console.log(weatherData.sys.country);

  const flagFunc = () => {
    if (weatherData.sys.country) {
      return (
        <img
          className="pl-2"
          src={`https://www.countryflagicons.com/FLAT/32/${weatherData.sys.country}.png`}
          alt="country flag"
        />
      );
    } else {
      return "N/A";
    }
  };

  return <>{flagFunc()}</>;
};

export default CountryFlag;
