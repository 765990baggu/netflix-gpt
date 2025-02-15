import { BG_URL } from "../utils/constants";
import GptmovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover md:w-screen"
          alt="logo"
          src={BG_URL}
        />
      </div>
      <div>
        <GptSearchBar />
        <GptmovieSuggestions />
      </div>
    </>
  );
};

export default GptSearchPage;
