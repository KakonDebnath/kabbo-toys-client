import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home/Home";
import AllToys from "../Page/AllToys/AllToys";
import Blogs from "../Page/Blogs/Blogs";
import ErrorPage from "../Page/Error/Errorpage";
import Login from "../Page/Login/Login";
import SignUp from "../Page/Login/SignUp";
import AddToys from "../Page/AddToy/AddToys";
import MyToy from "../Page/MyToy/MyToy";
import AllToyDetails from "../Page/AllToys/AllToyDetails";
import PrivateRoute from "./PrivateRoute";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage />,
      children: [
        {path: "/", element: <Home></Home>},
        {path: "/allToys", element: <AllToys></AllToys>},
        {path: "/blog", element: <Blogs></Blogs>},
        {path: "/myToys", element: <PrivateRoute><MyToy></MyToy></PrivateRoute>},
        {path: "/addToys", element: <PrivateRoute><AddToys></AddToys></PrivateRoute>},
        {path: "/allToyDetails/:id", element: <PrivateRoute><AllToyDetails></AllToyDetails></PrivateRoute>},
        
      ]
    },
    {
      path: "/login", element: <Login></Login>
    },
    {
      path: "/signUp", element: <SignUp></SignUp>
    },
  ]);

export default router;