import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    movies?.NowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-48 pl-9 relative z-10">
          <MovieList title={"NowPlaying"} movies={movies?.NowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies?.PopularMovies} />
          <MovieList title={"Trending"} movies={movies?.TrendingMovies} />
          <MovieList
            title={"UpComing Movies"}
            movies={movies?.UpcomingMovies}
          />

          {/*
        - MovieList - Popular
           - MovieCards* n
        - MoviesList - NowPlaying 
        - MovieList - Trending
        - MovieList - Horror
    */}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
