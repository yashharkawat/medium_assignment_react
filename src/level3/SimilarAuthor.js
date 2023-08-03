import { useState,useEffect } from "react";
import Post from "../Level1/Post";
const SimilarAuthor=(props)=>{
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        try{
            const newPosts=JSON.parse(localStorage.getItem('posts')); 
            const sameAuthorPosts=newPosts.filter((post)=>post.author===props.author&&post.id!=props.id);
            setPosts(sameAuthorPosts);
        }
        catch (err){
            console.log(err);
        }
    },[])
    const deletePostHandler=()=>{};
    return (
        <>
            <h2>Posts by same author</h2>
            <div className="post-list">
                {posts.map((post, index) => (
                <Post key={index} post={post} deletePost={deletePostHandler}/>
                ))}
            </div>
        </>
        );
}
export default SimilarAuthor;