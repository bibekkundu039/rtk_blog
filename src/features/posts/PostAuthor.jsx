import React from "react";
import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {
  const { user: Author } = useGetUsersQuery("getUsers", {
    selectFromResult: ({ data }) => ({
      user: data?.entities[userId],
    }),
  });

  return (
    <span>
      by <Link to={`/user/${userId}`}>{Author?.name || "Unknown author"}</Link>
    </span>
  );
};

export default PostAuthor;
