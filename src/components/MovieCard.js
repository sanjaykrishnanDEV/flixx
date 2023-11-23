import React from "react";
import { POSTER_PATH } from "../utils/constants";
const MovieCard = ({posterpath}) => {
  return (
    <div className="m-1 cursor-pointer hover:scale-105">
      <img src={POSTER_PATH + posterpath}  alt="movie_poster" className=" w-36"/>
    </div>
  );
};

export default MovieCard;
