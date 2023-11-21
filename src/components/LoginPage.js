import React, { useRef } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";
import { useState } from "react";
import { checkValidData } from "../utils/Validate";
const LoginPage = () => {
  //   useref for email password
  const email = useRef(null);
  const password = useRef(null);
  const [isSigninForm, setisSigninForm] = useState(true);
  const [errMessage, seterrMessage] = useState("");
  const toggleSignInForm = () => {
    setisSigninForm(() => !isSigninForm);
  };
  const handlevalidation = (e) => {
    e.preventDefault();
    const message = checkValidData(email.current.value, password.current.value);
    console.log(email.current.value);
    console.log(password.current.value);
    console.log(message);
    seterrMessage(message);
  };

  return (
    <div className=" h-screen w-screen ">
      <div className="absolute top-3 mx-3 brightness-100 z-10 text-red-500 text-4xl font-bold">
        Ciniflixx
      </div>
      <div className="absolute ">
        <img
          src={BG_URL}
          alt="bg"
          className="w-screen h-screen brightness-50"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="text-white absolute  w-1/3 h-fit p-12 m-auto left-0 right-0 top-0 bottom-0 flex flex-col
         justify-center items-center bg-black bg-opacity-80 rounded-md"
      >
        <label className="text-2xl">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </label>
        {!isSigninForm && (
          <input
            type="text"
            placeholder="Full name 
"
            className="w-full p-2 rounded-md  m-2 text-black"
          />
        )}
        {!isSigninForm && (
          <input
            type="number"
            placeholder="Mobile number 
"
            className="w-full p-2 rounded-md  m-2 text-black"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Id
"
          className="w-full p-2 rounded-md  m-2 text-black"
        />
        <input
          ref={password}
          type="text"
          placeholder="Password
"
          className="p-2 m-3 rounded-md w-full text-black"
        />
        <button
          onClick={handlevalidation}
          className=" bg-red-600 text-white w-full px-12 rounded-md py-2 "
        >
          {isSigninForm ? "Sign In ❤" : "Sign Up"}
        </button>
        {/* erroemessage */}
        <p className=" text-red-600">{errMessage}</p>
        <div className="flex my-4">
          <p className="mx-2 text-slate-400">
            {isSigninForm ? "New to Netflix?" : "Already Have an account!"}
          </p>
          <p className="text-white cursor-pointer" onClick={toggleSignInForm}>
            {isSigninForm ? "Sign Up" : "Sign In"}
          </p>
        </div>
        <p className="text-sm text-slate-300">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
