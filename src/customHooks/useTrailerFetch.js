import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { API_options } from "../utils/constants";
const useTrailerFetch = (movieId) => {
  const [trailerKey, settrailerKey] = useState(null);
  //fetch trailer video
  const getMovieTrailerVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_options
    );
    const json = await data.json();
    const trailer = json.results.filter((video) => video.type === "Trailer");
    settrailerKey(trailer[0]?.key);
  };
  useEffect(() => {
    getMovieTrailerVideo();
  }, []);
  return trailerKey;
};

export default useTrailerFetch;
