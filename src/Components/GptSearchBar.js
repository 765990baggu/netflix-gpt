import { useSelector } from "react-redux";
import language from "../utils/languageConstants";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store?.config?.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={language[langkey]?.gptSearchPlaceholder}
        />
        <button className=" m-4 py-1 px-2 bg-red-500 text-white rounded-lg col-span-3">
          {language[langkey]?.Search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
