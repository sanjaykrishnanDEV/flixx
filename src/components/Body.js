import React from "react";
import LoginPage from "./LoginPage";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";


const Body = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const appRouter = createBrowserRouter([
    { path: "/", element: <LoginPage /> },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
 
  return (
    <div className="overflow-hidden">
      {/* <LoginPage />
      <Browse /> */}
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
