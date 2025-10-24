import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Root/Root";
import Home from "../src/Components/Home/Home";
import Plants from "../src/Components/Plants/Plants";
import TreeDetails from "../src/Components/TreeDetails/TreeDetails";
import Login from "../src/Components/Login/Login";
import Registration from "../src/Components/Registration/Registration";
import PrivetRoute from "../Routes/PrivetRoute";
import Profile from "../src/Components/Profile/Profile";
import ErrorPAge from "../src/Components/ErrorPAge/ErrorPAge";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPAge></ErrorPAge>,
    children: [
        {
            index: true,
            Component: Home
        },
        {path: "/allplants",
            Component: Plants
        },
        {path: "/treedetails/:treeid",
          element: <PrivetRoute><TreeDetails></TreeDetails></PrivetRoute>,
          loader: ()=>fetch('/TreeData.json')
        },
        {path: "/login",
          Component: Login
        },
      {path: "/register",
        Component: Registration
      },
      {
        path: "/profile",
        element: <PrivetRoute><Profile></Profile></PrivetRoute>
      },
      
    ]
  },
]);

