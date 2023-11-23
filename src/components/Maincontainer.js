import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
const Maincontainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  //early return bug fixing in next line
  if (movies === null) return null;
  const mainMovie = movies.results[0];
  const { original_title, overview, id } = mainMovie;
  return (
    <div className=" h-screen w-screen bg-black">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id}/>
   
    </div>
  );
};

export default Maincontainer;
