import React, { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./SecondaryContainer";
import useTopRatedMovieFetcher from "../customHooks/useTopRatedFetcher";
import useAddUpcomingMovie from "../customHooks/useAddUpcomingMovie";
import useNowPlaying from "../customHooks/useNowplaying";
import usePopularMoviesFetcher from "../customHooks/usePopularMoviesFetcher";
import Searcher from "./Searcher";
import { useDispatch, useSelector } from "react-redux";
import { toggleSearchView } from "../utils/searchSlice";
const Browse = () => {
  const stateValueofSearchBool = useSelector((store) => store.search.showState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = localStorage.getItem('userId');
  //console.log(userId)
  function handleSignOut() {
    signOut(auth)
      .then(() => {
        localStorage.clear();
      })
      .catch((error) => {
        navigate("/error");
      });
    navigate("/");
  }

  function handleProfile(){
    navigate("/profile/"+userId)
  }
  function handleToggleSearch() {
    dispatch(toggleSearchView());
  }
  useNowPlaying();
  usePopularMoviesFetcher();
  useTopRatedMovieFetcher();
  useAddUpcomingMovie();
  return (
    <div className="">
      <div
        className="z-50 bg-transparent bg-opacity-50 p-5  absolute top-0
       w-[100%]  flex justify-between "
      >
        <Header />
        <p className="font-bold text-4xl text-red-600 ">CINIFY</p>

        <div>
          <button
            className=" text-white font-bold  rounded-2xl py-2 bg-purple-950 px-8 me-3"
            onClick={handleToggleSearch}
          >
            {!stateValueofSearchBool?"Try Search":"Back to Home"}
          </button>
          <button className="rounded-xl p-2 mx-2 bg-slate-200 " onClick={handleProfile}>
            My profile</button>
          <button onClick={handleSignOut} className="bg-slate-200 text-black p-2 rounded-2xl me-5 right-0">
            Signout
          </button>
        </div>
      </div>
      {stateValueofSearchBool ? (
        <Searcher />
      ) : (
        <>
          <Maincontainer />
          <Secondarycontainer />
        </>
      )}
      <h1 className=" bg-black flex flex-wrap justify-center text-slate-200">Made with ❤ by Sanjay Krishnan</h1>
    </div>
  );
};

export default Browse;
