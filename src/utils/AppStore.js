import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import movieReducer from "./MoviesSlice";
import GptReducer from "./GptSlice";
import configReducer from "./configSlice";

const AppStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    Gpt: GptReducer,
    config: configReducer,
  },
});

export default AppStore;
