import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className=" absolute w-screen bg-gradient-to-b from-black px-8 py-2 z-10 flex justify-between">
      <img
        className="w-48"
        alt="logo"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
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
