import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
  name: "Movies",
  initialState: {
    NowPlayingMovies: null,
    MovieTrailer: null,
  },

  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.NowPlayingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.MovieTrailer = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addMovieTrailer } = MoviesSlice.actions;
export default MoviesSlice.reducer;
