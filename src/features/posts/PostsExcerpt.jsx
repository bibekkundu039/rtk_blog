import React from "react";
import { useGetPostsQuery } from "./postsSlice";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

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
        <Link to={`/posts/${post.id}`}>View Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
    </article>
  );
};

export default PostsExcerpt;
