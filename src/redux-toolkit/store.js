import { configureStore } from "@reduxjs/toolkit";
import weatherDataSlice from "./weatherDataSlice";
import selectedLocationSlice from "./selectedLocationSlice";

export const store = configureStore({
  reducer: {
    weather: weatherDataSlice,
    location: selectedLocationSlice,
  },
});
