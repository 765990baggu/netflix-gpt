import MovieCard from "./MovieCards";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4">
      <h1 className="text-2xl text-white py-2">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
