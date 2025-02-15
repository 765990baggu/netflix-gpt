import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";
import { useEffect } from "react";
import { Logo_URL, Support_language } from "../utils/constants";
import { ToggleGptSearchView } from "../utils/GptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store?.Gpt?.ShowSearch);
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when Component Unmounts
    return () => Unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // ToggleView
    dispatch(ToggleGptSearchView());
  };
  const handleChangeLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className=" absolute w-screen bg-gradient-to-b from-black px-8 py-2 z-10 flex  flex-col md:flex-row justify-between">
      <img className="w-32 md:w-48 mx-auto md:mx-0" alt="logo" src={Logo_URL} />
      {user && (
        <div className="flex justify-between">
          <div>
            {showGptSearch && (
              <select
                className="m-6 p-1 bg-gray-400 text-white"
                onChange={handleChangeLanguage}
              >
                {Support_language?.map((lang) => (
                  <option key={lang?.identifier} value={lang.identifier}>
                    {lang?.name}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div>
            <button
              className="bg-purple-600 mt-5 p-2 text-white rounded-md"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "Homepage" : "GPT Search"}
            </button>
          </div>
          <img
            className="w-10 h-10 my-5 px-1 hidden md:block"
            alt="logo"
            src={user?.photoURL}
          />
          <button className="text-white text-xl" onClick={handleSignout}>
            (Signout)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
