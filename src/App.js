import React from "react";
// COMPONENTS
import Searchbar from "./components/Searchbar";
import ImageFetch from "./api/service/ImageFetch";
import WeatherRender from "./api/view/WeatherRender";
import WeatherFetch from "./api/service/WeatherFetch";
import LoadingSpinner from "./components/LoadingSpinner";
import loadingFunc from "./functions/LoadingFunc";
// REDUX TOOLKIT
import { useSelector } from "react-redux";
// REACT SPRING
import { useSpring, animated } from "react-spring";
import fade from "./animations/SpringAnimations";

const App = () => {
  const fetchedImage = useSelector((state) => state.fetchedImage.value);
  const loadingWeather = useSelector((state) => state.loadingWeather.value);
  // console.log(loadingWeather);

  return (
    <section
      className="min-h-screen w-full text-center bg-cover bg-yellow-100 bg-center relative "
      style={{ backgroundImage: `url(${fetchedImage})` }}
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
      <div className="mt-5 absolute inset-0 flex flex-col justify-center items-between w-100 px-20 min-h-max">
        <Searchbar />
        <WeatherFetch />
        <ImageFetch />
        {loadingFunc(loadingWeather, <LoadingSpinner />, <WeatherRender />)}
      </div>
    </section>
  );
};

export default App;
