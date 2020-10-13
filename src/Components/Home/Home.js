import React, { useEffect } from 'react';
import { useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        const url = "https://jsonplaceholder.typicode.com/posts"
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setPosts(data);
        })
    },[])
    return (
        <div>
            {
                posts.map(post =><Post key ={post.id} post = {post}></Post>)
            }
        </div>
    );
};

export default Home;