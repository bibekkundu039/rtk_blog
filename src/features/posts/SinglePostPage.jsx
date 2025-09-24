import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetPostsQuery } from "./postsSlice";
import TimeAgo from "./TimeAgo";
import PostAuthor from "./PostAuthor";

const SinglePostPage = () => {
  const { postId } = useParams();

  const { post, isLoading } = useGetPostsQuery(undefined, {
    selectFromResult: ({ data, isLoading }) => ({
      post: data?.entities[postId],
      isLoading,
    }),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found!</div>;
  }

  return (
    <>
      <article className="post">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p className="post-credit">
          <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
          <span>
            <PostAuthor userId={post.userId} />
          </span>
          <span> | </span>
          <span>
            <TimeAgo timestamp={post.date} />
          </span>
        </p>
      </article>
    </>
  );
};

export default SinglePostPage;
