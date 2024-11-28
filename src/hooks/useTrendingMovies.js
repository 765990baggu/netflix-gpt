import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/MoviesSlice";

const TrendingMovies = () => {
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    dispatch(addTrendingMovies(json?.results));
  };
  useEffect(() => {
    getTrendingMovies();
  }, []);
};

export default TrendingMovies;
