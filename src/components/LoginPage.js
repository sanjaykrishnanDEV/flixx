import React, { useRef } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";
import { useState } from "react";
import { checkValidData } from "../utils/Validate";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { Toaster, toast } from "react-hot-toast";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { database } from "../utils/firebase";
const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   useref for email password name
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
    // toast.success('invalid credentials');
    if(message){
      toast.error(message)
      console.log(message)
    }
    //firebase auth because valid credentials client-side
    if (message === null) {
      if (!isSigninForm) {
        //signupform
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            const db = getDatabase();
            //write to database
            set(ref(db, "userDetails/" + user.uid), {
              email: email.current.value,
              password: password.current.value,
            });
            localStorage.setItem("userId", user.uid);
            localStorage.setItem("email", email.current.value);
            toast.success("logging in");
          })
          .catch((err) => {
            console.log(err);
            toast.error(err.message);
          });
        /////
      } else {
        //signin form logic
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            localStorage.setItem("userId", user.uid);
            localStorage.setItem("email", email.current.value);
            toast.success("loggin you in")
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrMessage(errorMessage);
            toast.error(errMessage)
          });
      }
    }
    //some error in authentication so return nowhere
    else {
      return;
    }
  };

  return (
    <div className=" h-screen w-screen ">
      <Header />
      <div className="absolute top-3 mx-3 brightness-100 z-10 text-red-500 text-4xl font-bold">
        Cinify
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
        className="text-white absolute  sm:w-1/2 md:w-1/3 h-fit p-12 m-auto left-0 right-0 top-0 bottom-0 flex flex-col    justify-center items-center bg-black bg-opacity-80 rounded-md"
      >
        <Toaster />
        <label className="text-2xl">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </label>

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
        {/* <p className=" text-red-600">{errMessage}</p> */}
        <div className="flex my-4">
          <p className="mx-2 text-slate-400">
            {isSigninForm ? "New to Netflix?" : "Already Have an account!"}
          </p>
          <p className="text-white cursor-pointer" onClick={toggleSignInForm}>
            {isSigninForm ? "Sign Up" : "Sign In"}
          </p>
        </div>
        <div className="text-white text-sm">
          <p>Demo credentials</p>
          <p>Email: test@gmail.com</p>
          <p>password: Test@123</p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
