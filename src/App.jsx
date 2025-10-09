import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import "./App.css";
import PostLists from "./features/posts/PostLists";
import UserLists from "./features/users/UserLists";
import SinglePostPage from "./features/posts/SinglePostPage";
import SingleUserPage from "./features/users/SingleUserPage";

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
      {
        path: "/posts/:postId",
        element: <SinglePostPage />,
      },
      {
        path: "/users/:userId",
        element: <SingleUserPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
