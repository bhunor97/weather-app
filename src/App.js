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
    <section className="animate-gradient-xy min-h-screen w-full text-center bg-cover bg-gradient-to-br from-sky-800 via-blue-400 to-white bg-center">
      <div
        className="min-h-screen w-full text-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${fetchedImage})` }}
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
        <div className="mt-5 absolute inset-0 flex flex-col justify-center items-between w-100 px-5 md:px-20 min-h-max">
          <Searchbar />
          <WeatherFetch />
          <ImageFetch />
          {loadingFunc(loadingWeather, <LoadingSpinner />, <WeatherRender />)}
          <Error />
        </div>
      </div>
    </section>
  );
};

export default App;
