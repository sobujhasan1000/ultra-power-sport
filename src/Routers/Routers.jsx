import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SingIn from "../Pages/SingIn/SingIn";
import Instructor from "../Pages/InstructorPage/Instructor";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import SelectedClass from "../Pages/Dashboard/StudentPage/SelectedClass";
import PaymentHistroy from "../Pages/Dashboard/StudentPage/PaymentHistroy";

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
        {
            path:'instructor',
            element: <Instructor></Instructor>
        },
        {
            path:'classes',
            element: <Classes></Classes>
        },
      ]
    },
    {
      path:'dashboard',
      element: <Dashboard></Dashboard>,
      children:[
        {
          path:'selectedClass',
          element:<SelectedClass></SelectedClass>
        },
        {
          path:'paymentHistroy',
          element:<PaymentHistroy></PaymentHistroy>
        },
        {
          path:'enroledClass',
          element:<PaymentHistroy></PaymentHistroy>
        },
      ]
  },
  ]);