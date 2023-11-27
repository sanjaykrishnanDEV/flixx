import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { API_options, POSTERPATH_MOVDET } from "../utils/constants";
const MovieDetails = () => {
  const movieId = useParams();
  const navigate = useNavigate();
  const [details, setdetails] = useState({});
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId.movieId}?language=en-US`,
      API_options
    )
      .then((response) => response.json())
      .then((response) => setdetails(response))
      .catch((err) => console.error(err));
  }, []);
  const avg_rating = Math.round(Math.floor(details.vote_average))
  return (
    <div className=" w-screen h-screen">
      <div className="bg-black bg-opacity-70 text-red-500 h-16 w-screen flex justify-center items-center absolute top-0 z-20">
        <h2 className="font-bold text-center ">Cinify</h2>
      </div>
      <div className="absolute z-10 top-0 ">
        <img
          src={POSTERPATH_MOVDET + details?.backdrop_path}
          alt="bg_img"
          className="h-screen w-screen"
        />
      </div>
      <div className="z-30 rounded-t-xl p-5 h-fit bg-black  bg-opacity-90 absolute left-0 bottom-0 w-screen  ">
          <h1 className="text-white text-2xl font-bold text-center">{details.original_title}</h1>
          <h6 className=" text-slate-400 text-sm text-center">{details.overview}</h6>
          <p className=" text-slate-300 text-md text-center m-1">Rating:{avg_rating}/10</p>
          <div className=" flex justify-center">
            <a href={details?.homepage} target="_new">
              <button className="text-black bg-slate-300 p-2 rounded-md hover:bg-slate-50">Read More</button>
            </a>
            <button className="text-black bg-slate-300 p-2 rounded-md hover:bg-slate-50 ms-2" onClick={()=>navigate("/")}>Return to Home</button>
          </div>
        </div>
    </div>
  );
};

export default MovieDetails;
