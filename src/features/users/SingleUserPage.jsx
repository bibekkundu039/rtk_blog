import React from "react";
import { useParams } from "react-router-dom";
import { useGetUsersQuery } from "./usersSlice";

const SingleUserPage = () => {
  const { userId } = useParams();

  const { user, isLoading } = useGetUsersQuery(undefined, {
    selectFromResult: ({ data, isLoading }) => ({
      user: data?.entities[userId],
      isLoading,
    }),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return <div>User not found!</div>;
  }

  return (
    <>
      <article>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
        <p>Company: {user.company?.name}</p>
        <p>
          Address: {user.address?.street}, {user.address?.city}
        </p>
      </article>
    </>
  );
};

export default SingleUserPage;
