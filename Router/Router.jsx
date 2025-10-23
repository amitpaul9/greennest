import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Root/Root";
import Home from "../src/Components/Home/Home";
import Plants from "../src/Components/Plants/Plants";
import TreeDetails from "../src/Components/TreeDetails/TreeDetails";



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
        },
        {path: "/treedetails/:treeid",
          Component: TreeDetails,
          loader: ()=>fetch('/TreeData.json')
        }
    ]
  },
]);

