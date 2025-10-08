import React from "react";
import { useGetUsersQuery } from "./usersSlice";
import { Link } from "react-router-dom";

const UserLists = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  } else if (isError) {
    return <p>{error.toString()}</p>;
  }

  return (
    <>
      <section>
        <h2>Users</h2>
        <ul>
          {users.ids.map((userId) => (
            <li key={userId}>
              <Link to={`/users/${userId}`}>{users.entities[userId].name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default UserLists;
