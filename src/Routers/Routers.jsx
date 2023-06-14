import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SingIn from "../Pages/SingIn/SingIn";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import SelectedClass from "../Pages/Dashboard/StudentPage/SelectedClass";
import PaymentHistroy from "../Pages/Dashboard/StudentPage/PaymentHistroy";
import ManageUser from "../Pages/Dashboard/AdminPage/ManageUser";
import AddClasses from "../Pages/Dashboard/Instructor/AddClasses";
import ManageClasses from "../Pages/Dashboard/AdminPage/ManageClasses";
import MyClasses from "../Pages/Dashboard/Instructor/MyClasses";

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
        {
          path:'manageusers',
          element:<ManageUser></ManageUser>
        },
        {
          path:'manageclasses',
          element:<ManageClasses></ManageClasses>
        },
        {
          path:'addclasses',
          element:<AddClasses></AddClasses>
        },
        {
          path:'myclasses',
          element:<MyClasses></MyClasses>
        },
      ]
  },
  ]);