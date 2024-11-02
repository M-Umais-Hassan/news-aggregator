import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  preferences: {
    author: null,
    sources: [],
    category: null,
  },
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    setPreferences: (state, action) => {
      state.preferences = action.payload;
    },
  },
});

export const feedSelectors = {
  preferences: (state) => state?.feedReducer?.preferences,
};

export const { setPreferences } = feedSlice.actions;

export default feedSlice.reducer;
