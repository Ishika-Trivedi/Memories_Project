import React from "react";
import { useSelector } from "react-redux";

import Post from './Post/Post'

import useStyles from './styles';

const Posts= () =>{
    const state = useSelector((post) => post.posts);
    const classes = useStyles();

    console.log(state);
    
    return (
        <>
            <h1>Posts</h1>
            <Post />
            <Post />
        </>
        
    );
}

export default Posts;