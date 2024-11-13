import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [IssignInform, setSigninform] = useState(true);
  const TogglesignInForm = () => {
    setSigninform(!IssignInform);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="logo"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_small.jpg"
        />
      </div>
      <form className="w-4/12 absolute bg-black p-12 my-32 mx-auto right-0 left-0 text-white opacity-80 rounded-lg">
        <h1 className="text-2xl font-bold">
          {IssignInform ? "Sign In" : "Sign Up"}
        </h1>
        {!IssignInform && (
          <input
            type="text"
            placeholder="Name"
            className=" p-3 my-4 w-full bg-gray-700 rounded-sm"
          />
        )}
        <input
          type="text"
          placeholder="Email or Mobile Number"
          className=" p-3 my-4 w-full bg-gray-700 rounded-sm"
        />
        <input
          type="text"
          placeholder="Password"
          className=" p-3 my-4 w-full bg-gray-700 rounded-sm"
        />
        <button className="p-3 bg-red-500 my-7 w-full rounded-sm">
          Sign IN
        </button>
        <p className="cursor-pointer" onClick={TogglesignInForm}>
          New to Netflix? Sign up now
        </p>
      </form>
    </div>
  );
};

export default Login;
