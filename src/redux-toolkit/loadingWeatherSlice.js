import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const loadingWeatherSlice = createSlice({
  name: "loadingWeather",
  initialState,
  reducers: {
    setLoadingWeatherOn: (state) => {
      state.value = true;
    },
    setLoadingWeatherOff: (state) => {
      state.value = false;
    },
  },
});

export const { setLoadingWeatherOff, setLoadingWeatherOn } =
  loadingWeatherSlice.actions;
export default loadingWeatherSlice.reducer;
