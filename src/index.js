import React from 'react';
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";



const router = createBrowserRouter([
  {
    path: "/",
    element: [<App />, <Outlet />],
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);