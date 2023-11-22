import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector(store=>store.user)
  function handleSignOut() {
    navigate("/");
  }
  
  return (
    <div>
      <div className="flex justify-between">
        <p className="font-bold text-4xl text-red-600">CINIFY</p>
        <p>Welcome! {user?.displayName}</p>

        <button onClick={handleSignOut}>Signout</button>
      </div>
    </div>
  );
};

export default Browse;
