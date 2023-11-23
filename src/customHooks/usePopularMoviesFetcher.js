import {useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import {  addpopularMovies } from "../utils/movieSlice";
import { API_options } from "../utils/constants";
const usePopularMoviesFetcher = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getFromApi =async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
      API_options
    );
    const json = await data.json();
    dispatch(addpopularMovies(json))
  }

  useEffect(() => {
     getFromApi()
    }, []);
};

export default usePopularMoviesFetcher;