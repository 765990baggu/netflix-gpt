import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-32 md:w-48 pr-3">
      <img alt="NowPlayingMovies" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
