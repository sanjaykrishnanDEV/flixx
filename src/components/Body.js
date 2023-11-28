import Error from "./Error";
import React from "react";
import LoginPage from "./LoginPage";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import Profile from "./Profile";

const Body = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const appRouter = createBrowserRouter([
    { path: "/", element: <LoginPage /> },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/moviedetails/:movieId",
      element: <MovieDetails title="title" />,
    },
    {
      path: "/profile/:uid",
      element: <Profile />,
    },
    {
      path: "/*",
      element: <Error />,
    },
  ]);

  return (
    <div className="overflow-hidden h-auto ">
      {/* <LoginPage />
      <Browse /> */}
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
