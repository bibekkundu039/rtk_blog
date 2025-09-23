import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import "./App.css";
import PostLists from "./features/posts/PostLists";
import UserLists from "./features/users/UserLists";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/posts",
        element: <PostLists />,
      },
      {
        path: "/users",
        element: <UserLists />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
