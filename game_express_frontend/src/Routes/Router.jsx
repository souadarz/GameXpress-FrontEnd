import {
    createBrowserRouter,
  } from "react-router-dom";
  
  import React from "react";
  import ReactDOM from "react-dom/client";

// import Context from "../views/Context";

import App from "../App";
import Login from "../components/login";
import Register from "../components/register";
  
  export const router = createBrowserRouter([
    {
      path: "/home",element: <App />,
    },
    {
      path: "/register",element: <Register/>,
    },
    {
      path: "/login",element: <Login />,
    },
  ]);
