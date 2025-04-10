import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Error from "./Error";
import GptSearchPage from "./GptSearchPage";

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/error",
      element: <Error />,
    },
    {path: "/gptsearch",
    element: <GptSearchPage />
  }
  ]);


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
