import React from "react";
import MovieCard from "./MovieCard";


const MovieList = ({ title, movies }) => {
    const nowPlayingMovies = movies?.results;
  return (
    <div className="flex flex-col justify-center  h-fit  overflow-x-hidden ">
      <p className="text-2xl ms-2 text-white">{title}</p>
      <div className="flex flex-col ms-2 h-80 flex-wrap    
      justify-between  hover:overflow-x-scroll hover:scrollbar-thin scrollbar-thumb-gray-100
       scrollbar-track-red-800">
        {nowPlayingMovies?.map((item)=><MovieCard posterpath={item.poster_path} key={item.id} id={item.id}/>)}
      </div>
    </div>
  );
};

export default MovieList;
