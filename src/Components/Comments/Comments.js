import React, { useEffect, useState } from 'react';
import CommentInfo from '../CommentInfo/CommentInfo';

const Comments = () => {
    const[comments,setComments] = useState([]);
    useEffect(()=>{
        const url = "https://jsonplaceholder.typicode.com/comments"
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setComments(data);
        })
    },[])
    return (
        <div>
            {comments.map(comment =><CommentInfo comment = {comment}></CommentInfo>)}
        </div>
    );
};

export default Comments;