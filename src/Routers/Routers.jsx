import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SingIn from "../Pages/SingIn/SingIn";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'logIn',
            element: <LogIn></LogIn>
        },
        {
            path:'singIn',
            element: <SingIn></SingIn>
        },
      ]
    },
  ]);