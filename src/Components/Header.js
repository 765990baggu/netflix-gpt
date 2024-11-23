import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";
import { useEffect } from "react";
import { Logo_URL } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
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
  return (
    <div className=" absolute w-screen bg-gradient-to-b from-black px-8 py-2 z-10 flex justify-between">
      <img className="w-48" alt="logo" src={Logo_URL} />
      {user && (
        <div className="flex">
          <img
            className="w-10 h-10 my-5 px-1"
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
