import PostList from "./PostList";
import NavBar from "./NavBar";
import { useState } from "react";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";

const post = [
    {
      id:1,
      title: 'Introduction to React',
      topic: 'Technology',
      image: 'https://example.com/react-intro.jpg',
      text: 'In this article, we will introduce you to the basics of React and its core concepts.',
      datetime: '2023-08-03T12:00',
      author: 'John Doe',
    },
    {
      id:2,
      title: 'The Art of Writing',
      topic: 'Writing',
      image: 'https://example.com/writing-art.jpg',
      text: 'Discover the secrets of becoming a skilled and prolific writer in this insightful article.',
      datetime: '2023-08-02T15:30',
      author: 'Jane Smith',
    },
    {
      id:3,
      title: 'Healthy Eating Habits',
      topic: 'Health',
      image: 'https://example.com/healthy-eating.jpg',
      text: 'Learn about the importance of maintaining healthy eating habits and its impact on overall well-being.',
      datetime: '2023-08-01T10:15',
      author: 'Alex Johnson',
    },
    // Add more posts here
  ];
localStorage.setItem('posts',JSON.stringify(post));
const Display=()=>{
    const [search,setSearch]=useState('');
    const [filter,setFilter]=useState({
        author:'',
        date:'',
        likes:'',
        comments:'',
    });
    const searchHandler=(searchText)=>{
        setSearch(searchText);
    }
    const filterHandler=(filterValues)=>{
        setFilter(filterValues);
    }
    return (
        <>
            <Link to='profile'><button>Profile</button></Link>
            <br />
            <Link to='signup'><button>Sign up</button></Link>
            <br />
            <Link to='login'><button>Login</button></Link>
            <br />
            <br />
            <NavBar searchHandler={searchHandler} sendFilter={filterHandler}/>
            <PostList searchText={search} filter={filter}/>
        </>
    );
}
export default Display;