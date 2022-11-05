import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "Budapest",
};

export const selectedLocationSlice = createSlice({
  name: "selectedLocation",
  initialState,
  reducers: {
    setSelectedLocation: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSelectedLocation } = selectedLocationSlice.actions;
export default selectedLocationSlice.reducer;
