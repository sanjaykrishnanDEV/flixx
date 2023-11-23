import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux/es/hooks/useSelector";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className=" p-10 bg-black">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
    </div>
  );
};

export default SecondaryContainer;
