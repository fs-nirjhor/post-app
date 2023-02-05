import React from 'react';
import { useState, useEffect, createContext } from "react";
import {Outlet} from 'react-router-dom';
import Nav from "../Nav/Nav";

export const PostContext = createContext();

const Home = () => {
  const [allPost, setAllPost] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => res.json())
    .then(data => setAllPost(data));
  }, []);
  
return (
  <PostContext.Provider value={allPost}>
    <Nav/>  
    <Outlet/>  
  </PostContext.Provider>
);
};

export default Home;