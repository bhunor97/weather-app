import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

const errorSlice = createSlice({
  name: "errorMessage",
  initialState: initialState,
  reducers: {
    setErrorMessage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setErrorMessage } = errorSlice.actions;
export default errorSlice.reducer;
