import React from "react";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import SimilarAuthor from "../level3/SimilarAuthor";

const PostDetails = () => {
  const params= useParams();
  const [post,setPost]=useState({});
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setLoading(true);
    try{
        const newPosts=JSON.parse(localStorage.getItem('posts')); 
        setPost(...newPosts.filter(post=>post.id==params.id));
         // console.log(post);
    }
    catch (err){
        console.log(err);
    }
    setLoading(false);
},[params.id])

  if (loading) {
    return <div>Post not found</div>;
  }
  const clickHandler=()=>{

  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>Author: {post.author}</p>
      <p>Date: {post.datetime}</p>
      <img src={post.image} style={{ width: "300px", height: "200px" }} />
      <p>{post.text}</p>
      <button onClick={clickHandler}>Follow author</button>
      <SimilarAuthor author={post.author} id={post.id}/>
      
    </div>
  );
};

export default PostDetails;
