import React from "react";
// REDUX TOOLKIT
import { useSelector } from "react-redux";

const CountryFlag = () => {
  const weatherData = useSelector((state) => state.weather.value);
  // console.log(weatherData.sys.country);

  const flagFunc = () => {
    if (weatherData.sys.country) {
      return (
        <img
          className="md:pl-3 md:pr-3 w-[3rem] md:w-[4rem] lg:w-[5rem]"
          src={`https://www.countryflagicons.com/FLAT/64/${weatherData.sys.country}.png`}
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
