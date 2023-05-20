import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/home/Home";
import Blogs from "../pages/NavigationToys/Blogs/Blogs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Terms from "../pages/Login/Terms/Terms";
import AllToys from "../pages/NavigationToys/AllToys/AllToys";
import AddToys from "../pages/NavigationToys/AddToys/AddToys";
import MyToys from "../pages/NavigationToys/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/alltoys',
            element: <AllToys></AllToys>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/mytoys',
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path: '/addtoys',
          element: <AddToys></AddToys>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/terms',
          element: <Terms></Terms>
        }
      ]
    },
  ]);

  export default router;