import { useSelector } from "react-redux";
import NowPlayingMovies from "../hooks/useNowPlayingMovies";
import PopularMovies from "../hooks/usePopularMovies";
import TrendingMovies from "../hooks/useTrendingMovies";
import UpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearchPage from "./GptSearchPage";

const Browse = () => {
  const ShowGptSearch = useSelector((store) => store.Gpt.ShowSearch);
  NowPlayingMovies();
  PopularMovies();
  TrendingMovies();
  UpcomingMovies();
  return (
    <div>
      <Header />
      {ShowGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
