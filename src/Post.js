import React from 'react';
import './Post.css'; // Assuming you have a CSS file for the Post component
import { Link } from 'react-router-dom';
const Post = ({ post ,deletePost}) => {
  return (
    <div className="post">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-topic">{post.topic}</p>
      <img className="post-image" src={post.image} alt="Featured" />
      <p className="post-text">{post.text}</p>
      <p className="post-datetime">Published on: {post.datetime}</p>
      <p className="post-author">Author: {post.author}</p>
      <Link to={`edit/${post.id}`}><button >Edit post</button></Link>
      <button onClick={() => deletePost(post.id)}>Delete</button>
    </div>
  );
};

export default Post;
