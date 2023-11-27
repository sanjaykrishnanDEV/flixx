import React from "react";
import { POSTER_PATH } from "../utils/constants";
import MovieDetails from "./MovieDetails";
import { useNavigate } from "react-router-dom";
const MovieCard = ({posterpath,id}) => {
  const navigate = useNavigate()
  function handleOpenMovieDetailsPage(){

    navigate("/moviedetails/"+id)
  }
  return (
    <div className="m-1 cursor-pointer hover:scale-105"  onClick={handleOpenMovieDetailsPage}>
      <img src={POSTER_PATH + posterpath}  alt="movie_poster" className=" w-36"/>
    </div>
  );
};

export default MovieCard;
