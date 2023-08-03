import React from 'react';
import './Post.css'; 
import { Link } from 'react-router-dom';
import readingTime from '../level5/readingTime';
import SaveForLater from '../level5/SaveForLater';

const Post = ({ post ,deletePost}) => {
  const readTime=readingTime(post.text);
  return (
    <div className="post" id={post.id}>
      <h2 className="post-title">{post.title}</h2>
      <p className="post-topic">{post.topic}</p>
      <Link to={`/post-details/${post.id}`}><img className="post-image" src={post.image} alt="Featured" /></Link>
      <p className="post-text">{post.text}</p>
      <p className="post-datetime">Published on: {post.datetime}</p>
      <p className="post-author">Author: {post.author}</p>
      <div>Reading time: {readTime} min</div>
      <SaveForLater />
      <Link to={`/edit/${post.id}`}><button >Edit post</button></Link>
      <button onClick={() => deletePost(post.id)}>Delete</button>
    </div>
  );
};

export default Post;
