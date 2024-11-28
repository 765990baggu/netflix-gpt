import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
  name: "Movies",
  initialState: {
    NowPlayingMovies: null,
    MovieTrailer: null,
    PopularMovies: null,
    TrendingMovies: null,
    UpcomingMovies: null,
  },

  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.NowPlayingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.MovieTrailer = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.PopularMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.TrendingMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.UpcomingMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addMovieTrailer,
  addPopularMovies,
  addTrendingMovies,
  addUpcomingMovies,
} = MoviesSlice.actions;
export default MoviesSlice.reducer;
