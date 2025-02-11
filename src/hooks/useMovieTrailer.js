import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/MoviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const MovieTrailer = (MovieId) => {
  const dispatch = useDispatch();
  const MovieTrailer = useSelector((store) => store?.movies?.MovieTrailer);
  // Fetch trailer Video
  const getMovieTrailer = async () => {
    const Data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        MovieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await Data.json();
    const FilterData = json?.results.filter(
      (video) => video?.type === "Trailer"
    );
    const Trailer = FilterData.length ? FilterData[0] : json?.results[0];

    dispatch(addMovieTrailer(Trailer));
  };

  useEffect(() => {
    !MovieTrailer && getMovieTrailer();
  }, []);
};

export default MovieTrailer;
