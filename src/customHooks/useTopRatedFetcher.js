import {useEffect} from "react";
import { useDispatch } from "react-redux";
import { addtopRatedMovies } from "../utils/movieSlice";
import { API_options } from "../utils/constants";
const useTopRatedMovieFetcher = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?&page=1",
      API_options
    )
      .then((response) => response.json())
      .then((response) => dispatch(addtopRatedMovies(response)))
      .catch((err) => console.error(err));
  }, [dispatch]);
};

export default useTopRatedMovieFetcher;