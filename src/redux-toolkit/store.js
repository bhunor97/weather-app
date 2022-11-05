import { configureStore } from "@reduxjs/toolkit";
import weatherDataSlice from "./weatherDataSlice";
import selectedLocationSlice from "./selectedLocationSlice";
import fetchImageSlice from "./fetchImageSlice";
import loadingWeatherSlice from "./loadingWeatherSlice";

export const store = configureStore({
  reducer: {
    weather: weatherDataSlice,
    location: selectedLocationSlice,
    fetchedImage: fetchImageSlice,
    loadingWeather: loadingWeatherSlice,
  },
});
