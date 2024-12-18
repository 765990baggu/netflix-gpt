import { BG_URL } from "../utils/constants";
import GptmovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img alt="logo" src={BG_URL} />
      </div>
      <GptSearchBar />
      <GptmovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
