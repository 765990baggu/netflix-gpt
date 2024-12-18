import { useRef, useState } from "react";
import Header from "./Header";
import CheckValidationForm from "./CheckValidationForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";
import { BG_URL, profile_Url } from "../utils/constants";

const Login = () => {
  const [IssignInform, setSigninform] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const dispatch = useDispatch();

  const TogglesignInForm = () => {
    setSigninform(!IssignInform);
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //CheckFormValidation
    const message = CheckValidationForm(
      email.current.value,
      password.current.value
    );
    seterrorMessage(message);
    if (message === null) {
      // Sign In and Sign Up
      if (!IssignInform) {
        //Sign Up logic
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value,
              photoURL: profile_Url,
            })
              .then(() => {
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
              })
              .catch((error) => {
                seterrorMessage(error.message);
              });

            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrorMessage(errorCode + "-" + errorMessage);
          });
      } else {
        // Sign In
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            //console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrorMessage(errorCode + "-" + errorMessage);
          });
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img alt="logo" src={BG_URL} />
      </div>
      <form
        className="w-4/12 absolute bg-black p-12 my-32 mx-auto right-0 left-0 text-white opacity-80 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-2xl font-bold">
          {IssignInform ? "Sign In" : "Sign Up"}
        </h1>
        {!IssignInform && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className=" p-3 my-4 w-full bg-gray-700 rounded-sm"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className=" p-3 my-4 w-full bg-gray-700 rounded-sm"
        />
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className=" p-3 my-4 w-full bg-gray-700 rounded-sm"
        />
        <p className="text-red-500 font-bold py-2 text-lg">{errorMessage}</p>
        <button
          className="p-3 bg-red-500 my-7 w-full rounded-sm"
          onClick={handleButtonClick}
        >
          {IssignInform ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={TogglesignInForm}>
          New to Netflix? Sign up now
        </p>
      </form>
    </div>
  );
};

export default Login;
