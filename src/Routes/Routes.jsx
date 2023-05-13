import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home";
import Service from "../pages/Service/Service";
import Login from "../layouts/Registration/Login";
import Registration from "../layouts/Registration/Registration";
import Checkout from "../pages/Checkout/Checkout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
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
            element: <Checkout></Checkout>
        }
      ]
    },
  ]);

export default router;