import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "GptSearch",
  initialState: {
    ShowSearch: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    ToggleGptSearchView: (state) => {
      state.ShowSearch = !state.ShowSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { ToggleGptSearchView, addGptMovieResult } = GptSlice.actions;
export default GptSlice.reducer;
