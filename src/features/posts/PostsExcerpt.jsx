import React from "react";
import { useGetPostsQuery } from "./postsSlice";
import { Link } from "react-router-dom";

const PostsExcerpt = ({ postId }) => {
  const { post } = useGetPostsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      post: data?.entities[postId],
    }),
  });

  console.log("PostExcerpt Rendered", post);

  return (
    <article className="post-excerpt">
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 50)}</p>
      <p className="post-credit">
        <Link to={`/post/${post.id}`}>View Post</Link>
      </p>
    </article>
  );
};

export default PostsExcerpt;
