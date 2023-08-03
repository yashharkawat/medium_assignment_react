import React from 'react';
import './Post.css'; 
import { Link } from 'react-router-dom';
import readingTime from '../level5/readingTime';
import SaveForLater from '../level5/SaveForLater';
import deleteImage from './delete.png' 


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
      <div className='navbar-container'>
      <div>Reading time: {readTime} min</div>
      <div className='navbar-right'>
        <SaveForLater />
        <Link to={`/edit/${post.id}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Write"><path d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z" fill="currentColor"></path><path d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2" stroke="currentColor"></path></svg>                  
        </Link>
        <div className='pointer' onClick={() => deletePost(post.id)}>
          <img src={deleteImage} alt='delete'/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Post;
