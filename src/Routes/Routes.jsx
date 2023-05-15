import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home";
import Service from "../pages/Service/Service";
import Login from "../layouts/Registration/Login";
import Registration from "../layouts/Registration/Registration";
import Checkout from "../pages/Checkout/Checkout";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/services')
        },
        {
            path: "service",
            element: <Service></Service>
        },
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path: "registration",
            element: <Registration></Registration>
        },
        {
            path: "checkout/:id",
            element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path: "/bookings",
            element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
      ]
    },
  ]);

export default router;