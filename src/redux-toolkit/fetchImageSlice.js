import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "Budapest",
};

const fetchImageSlice = createSlice({
  name: "fetchedImage",
  initialState: initialState,
  reducers: {
    setFetchedImage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFetchedImage } = fetchImageSlice.actions;
export default fetchImageSlice.reducer;
