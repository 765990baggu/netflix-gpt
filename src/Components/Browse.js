import NowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  NowPlayingMovies();
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
      <div className="">
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse;
