import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const errorSlice = createSlice({
  name: "errorMessage",
  initialState: initialState,
  reducers: {
    setErrorMessage: (state, action) => {
      state.value = action.payload;
    },
    clearErrorMessage: (state) => {
      state.value = [];
    },
  },
});

export const { setErrorMessage, clearErrorMessage } = errorSlice.actions;
export default errorSlice.reducer;
