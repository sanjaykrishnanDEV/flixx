import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen w-screen  flex flex-col justify-center items-center">
      <h1 className=" animate-ping text-6xl mb-8">Error 404 :)</h1>
      <p>Page not found ! </p>
      <Link to={"/"}>
        <button className=" bg-slate-800 p-3 text-white m-4 ">Go to home</button>
      </Link>
    </div>
  );
};

export default Error;
