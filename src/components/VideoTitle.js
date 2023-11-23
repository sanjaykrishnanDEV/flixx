import React from "react";

const VideoTitle = ({ title, overview }) => {
  // console.log(overview);
  return (
    <div
      className="absolute z-10 flex h-screen  w-auto flex-col px-5 
       place-content-end  md:py-28 font-sans  text-white bg-gradient-to-r bg-black   
    bg-opacity-25"
    >
      <h1 className="text-5xl  md:w-1/4 p-3 font-bold">{title}</h1>
      <p className="text-sm  md:w-1/3 px-3">{overview}</p>
      <div className="p-4">
        <button className=" bg-slate-300 rounded-md p-2 w-24 text-black font-semibold me-2 bg-opacity-75 hover:bg-slate-100">
          ▶play
        </button>
        <button className=" bg-slate-100 rounded-md p-2 w-fit text-black font-semibold me-2 bg-opacity-75 hover:bg-slate-100">
          ℹ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
