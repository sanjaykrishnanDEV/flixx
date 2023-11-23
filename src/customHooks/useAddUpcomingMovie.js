import {useEffect} from "react";
import { useDispatch } from "react-redux";
import { addToUpcomingMovies } from "../utils/movieSlice";
import { API_options } from "../utils/constants";
const useAddUpcomingMovie = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?&page=1",
      API_options
    )
      .then((response) => response.json())
      .then((response) => dispatch(addToUpcomingMovies(response)))
      .catch((err) => console.error(err));
  }, [dispatch]);
};

export default useAddUpcomingMovie;