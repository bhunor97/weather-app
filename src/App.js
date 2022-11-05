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

const App = () => {
  const fetchedImage = useSelector((state) => state.fetchedImage.value);
  const loadingWeather = useSelector((state) => state.loadingWeather.value);
  // console.log(loadingWeather);

  return (
    <section
      className="h-screen w-full text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${fetchedImage})` }}
    >
      <Searchbar />
      <WeatherFetch />
      <ImageFetch />
      {loadingFunc(loadingWeather, <LoadingSpinner />, <WeatherRender />)}
    </section>
  );
};

export default App;
