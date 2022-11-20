import React from "react";
// COMPONENTS
import Searchbar from "./components/Searchbar";
import ImageFetch from "./api/service/ImageFetch";
import WeatherRender from "./api/view/WeatherRender";
import WeatherFetch from "./api/service/WeatherFetch";
import LoadingSpinner from "./components/LoadingSpinner";
import loadingFunc from "./functions/LoadingFunc";
import Error from "./components/Error";
// REDUX TOOLKIT
import { useSelector } from "react-redux";
// REACT SPRING
import { useSpring, animated } from "react-spring";
import { weatherFetchAnimation } from "./animations/SpringAnimations";

const App = () => {
  const fetchedImage = useSelector((state) => state.fetchedImage.value);
  const loadingWeather = useSelector((state) => state.loadingWeather.value);
  const error = useSelector((state) => state.error.value);
  const myStyle = useSpring(weatherFetchAnimation);

  return (
    <section
      className="min-h-screen w-full text-center bg-cover bg-yellow-100 bg-center relative "
      style={{ backgroundImage: `url(${fetchedImage})` }}
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
      <div className="mt-5 absolute inset-0 flex flex-col justify-center items-between w-100 px-10 md:px-20 min-h-max">
        <Searchbar />
        <WeatherFetch />
        <ImageFetch />
        {loadingFunc(loadingWeather, <LoadingSpinner />, <WeatherRender />)}
        <Error />
      </div>
    </section>
  );
};

export default App;
