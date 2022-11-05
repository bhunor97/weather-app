import React from "react";
// REDUX TOOLKIT
import { useSelector } from "react-redux";

const LoadingSpinner = () => {
  const loadingWeather = useSelector((state) => state.loadingWeather.value);
  // console.log(loadingWeather);
  const spinnerFunc = () => {
    return (
      <div className="w-40 mx-auto">
        <svg
          className="animate-spin m-auto text-white opacity-80 "
          fill="none"
          height="100"
          width="100"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12H19C19 15.866 15.866 19 12 19V22Z"
            fill="currentColor"
          />
          <path
            d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
            fill="currentColor"
          />
        </svg>
        <span className="text-xl">Loading...</span>
      </div>
    );
  };

  return <div>{spinnerFunc()}</div>;
};

export default LoadingSpinner;
