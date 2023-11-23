import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import useNowPlaying from "../customHooks/useNowplaying";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./SecondaryContainer";
const Browse = () => {
  const navigate = useNavigate();
  function handleSignOut() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
    navigate("/");
  }
  useNowPlaying();
  return (
    <div className="">
      <div
        className="z-50 bg-transparent bg-opacity-25 p-5  absolute top-0
       w-[100%]  flex justify-between "
      >
        <Header />
        <p className="font-bold text-4xl text-red-600 ">CINIFY</p>

        <button onClick={handleSignOut} className="text-white me-5 right-0">
          Signout
        </button>
      </div>
      <div className="">
        <Maincontainer />
        <Secondarycontainer />
      </div>
    </div>
  );
};

export default Browse;
