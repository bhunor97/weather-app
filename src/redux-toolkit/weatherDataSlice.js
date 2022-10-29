import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const weatherDataSlice = createSlice({
  name: "weatherData",
  initialState,
  reducers: {
    setWeatherData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setWeatherData } = weatherDataSlice.actions;
export default weatherDataSlice.reducer;
