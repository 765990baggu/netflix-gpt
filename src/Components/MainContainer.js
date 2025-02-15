import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.NowPlayingMovies);

  if (movies === null) return;
  const mainMovie = movies[0];
  // console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground MovieId={id} />
    </div>
  );
};

export default MainContainer;
