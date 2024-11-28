import NowPlayingMovies from "../hooks/useNowPlayingMovies";
import PopularMovies from "../hooks/usePopularMovies";
import TrendingMovies from "../hooks/useTrendingMovies";
import UpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  NowPlayingMovies();
  PopularMovies();
  TrendingMovies();
  UpcomingMovies();
  return (
    <div>
      <Header />
      {/*
         -MainContainer
            - Background Video
            - Video Title
         -Secondary Container
           - Movies Lists
           - Movies Cards   
      */}
      <div>
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse;
