import { useDispatch, useSelector } from "react-redux";
import language from "../utils/languageConstants";
import { useRef } from "react";
import genAI from "../utils/geminiAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/GptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langkey = useSelector((store) => store?.config?.lang);
  const searchText = useRef(null);

  // search movie in tmdb
  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText?.current?.value);
    // make an API call to GPT Api and get the results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchText?.current?.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: RRR, Pushpa, Bahubali, Koi Mil Gaya, Amaran";

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const gptResults = await model.generateContent(gptQuery);
    console.log(
      gptResults.response?.candidates?.[0]?.content?.parts?.[0]?.text
    );

    const gptMovies =
      gptResults?.response?.candidates?.[0]?.content?.parts?.[0]?.text.split(
        ","
      );

    // For each movie  I will search TMDB Api
    const PromiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));
    const tmdbResults = await Promise.all(PromiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={language[langkey]?.gptSearchPlaceholder}
        />
        <button
          className=" m-4 py-1 px-2 bg-red-500 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {language[langkey]?.Search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
