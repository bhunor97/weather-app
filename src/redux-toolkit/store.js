import { configureStore } from "@reduxjs/toolkit";
import weatherDataSlice from "./weatherDataSlice";
import selectedLocationSlice from "./selectedLocationSlice";
import fetchImageSlice from "./fetchImageSlice";
import loadingWeatherSlice from "./loadingWeatherSlice";
import errorSlice from "./errorSlice";

export const store = configureStore({
  reducer: {
    weather: weatherDataSlice,
    location: selectedLocationSlice,
    fetchedImage: fetchImageSlice,
    loadingWeather: loadingWeatherSlice,
    error: errorSlice,
  },
});
