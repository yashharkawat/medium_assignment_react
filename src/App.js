import './App.css';
import PostList from './PostList';

import {
  createBrowserRouter,RouterProvider
} from "react-router-dom";
import React from 'react';
import './App.css'
import NewPost from './NewPost';
import Edit from './Edit';
import Display from './Display';
import SignUp from './SignUp';
import Login from './Login';
import ProfilePage from './ProfilePage';
import EditProfile from './EditProfile';
const router=createBrowserRouter([
{
  path:'/',
  element:<Display />
},
{
  path:'add',
  element:<NewPost />
},
{
  path:'edit/:id',
  element:<Edit />
},
{
  path:'signup',
  element:<SignUp />
},
{
  path:'login',
  element:<Login />
},
{
  path:'profile',
  element:<ProfilePage />
},
{
  path:'editProfile',
  element:<EditProfile />
}
])

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  
  );
}

export default App;

