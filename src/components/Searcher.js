import React, { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard"
const Searcher = () => {
  const [searchValue, setsearchValue] = useState("");
  const[datum,setdatum]=useState([])
  const searchstring = useRef(null);
  function getSearchString() {
    setsearchValue(() => searchstring.current.value);
    console.log(searchValue);
  }
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?query="+searchValue+"&api_key=8ea68237379782a56cf3b4b12d40f1d9"
    )
      .then((response) => response.json())
      .then((data) => {
        setdatum(data)
      })
      .catch((err) => console.log(err));
  }, [searchValue]);
 
  return (
    <div className="text-white bg-black  pt-[20%] flex flex-col justify-center items-center min-h-screen">
      <h2 className="text-center text-4xl">Prisma Search </h2>
      {/* <p className=" text-slate-400 m-3">an OpenAI powered Search</p> */}
      <input
        placeholder="What you like to watch today?"
        ref={searchstring}
        type="text"
        className=" rounded-xl w-[50%] p-1 divide-x-4 text-black text-xl focus:border-bg-none 
       bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500  placeholder-slate-800"
      />
      <button className="mt-4 bg-slate-400 p-3" onClick={getSearchString}>
        Search
      </button>
      <div className="bg-black  w-screen flex flex-wrap justify-center ">
       
        {datum.results?.map((item)=><MovieCard posterpath={item.poster_path} key={item.id} id={item.id}/>)}
      </div>
    </div>
  );
};

export default Searcher;
