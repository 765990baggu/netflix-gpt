import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/MoviesSlice";
import { useEffect } from "react";

const NowPlayingMovies = () => {
  const dispatch = useDispatch();
  const NowPlayingMovies = useSelector(
    (store) => store?.movies?.NowPlayingMovies
  );
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json);
    dispatch(addNowPlayingMovies(json?.results));
  };

  useEffect(() => {
    !NowPlayingMovies && getNowPlayingMovies();
  }, []);
};
export default NowPlayingMovies;
