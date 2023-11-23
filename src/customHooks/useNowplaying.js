import {useEffect} from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_options } from "../utils/constants";
const useNowPlaying = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_options
    )
      .then((response) => response.json())
      .then((response) => dispatch(addNowPlayingMovies(response)))
      .then((response)=>{console.log(response.payload.results)})
      .catch((err) => console.error(err));
  }, [dispatch]);
};

export default useNowPlaying;