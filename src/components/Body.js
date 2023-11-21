import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import LoginPage from "./LoginPage";
import Browse from "./Browse";
import { createBrowserRouter, useNavigate } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser,removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    { path: "/", element: <LoginPage /> },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        dispatch(removeUser());
        
      }
    });
  }, []);
  return (
    <div>
      {/* <LoginPage />
      <Browse /> */}
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
