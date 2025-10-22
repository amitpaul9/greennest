import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Root/Root";
import Home from "../src/Components/Home/Home";
import Plants from "../src/Components/Plants/Plants";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            Component: Home
        },
        {path: "/allplants",
            Component: Plants
        }
    ]
  },
]);

