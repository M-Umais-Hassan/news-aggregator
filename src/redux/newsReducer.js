import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { newsApi } from "../apis/newsApi";

const initialState = {
  newsListingData: {},
  sourcesListingData: {},
  headlinesListingData: {},
  nytimesListingData: {},
};

export const headlinesListingThunk = createAsyncThunk(
  "news/headlinesListingThunk",
  async (filters, { rejectWithValue }) => {
    try {
      let res = await newsApi.headlinesListing(filters);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const newsListingThunk = createAsyncThunk(
  "news/newsListingThunk",
  async (filters, { rejectWithValue }) => {
    try {
      let res = await newsApi.newsListing(filters);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const sourcesListingThunk = createAsyncThunk(
  "news/sourcesListingThunk",
  async (filters, { rejectWithValue }) => {
    try {
      let res = await newsApi.sourcesListing();
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const nytimesListingThunk = createAsyncThunk(
  "news/nytimesListingThunk",
  async (filters, { rejectWithValue }) => {
    try {
      let res = await newsApi.nyTimesListing(filters);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(headlinesListingThunk.fulfilled, (state, action) => {
        state.headlinesListingData = action.payload;
      })
      .addCase(newsListingThunk.fulfilled, (state, action) => {
        state.newsListingData = action.payload;
      })
      .addCase(sourcesListingThunk.fulfilled, (state, action) => {
        state.sourcesListingData = action.payload;
      })
      .addCase(nytimesListingThunk.fulfilled, (state, action) => {
        state.nytimesListingData = action.payload;
      });
  },
});

export const newsSelectors = {
  headlinesListingData: (state) => state?.newsReducer?.headlinesListingData,
  newsListingData: (state) => state?.newsReducer?.newsListingData,
  sourcesListingData: (state) => state?.newsReducer?.sourcesListingData,
  nytimesListingData: (state) => state?.newsReducer?.nytimesListingData,
};

export default newsSlice.reducer;
