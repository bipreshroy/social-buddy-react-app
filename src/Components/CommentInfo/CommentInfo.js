import React from 'react';
import { Link } from 'react-router-dom';

const CommentInfo = (props) => {
    const{id} = props.comment;
    const commentInfoStyle = {
        display:'inline-block',
        border:'1px solid lightgrey',
        width:'200px',
        height:'50px',
        marginTop:'20px',
        marginLeft:'10px',
        paddingBottom:'10px',
        textAlign:'center',
        borderRadius:'50px'
    }
    return (
        <div style ={commentInfoStyle}>
            <Link to = {`/comment/${id}`}  style ={{textDecoration:'none'}}><h4>Comment : {id}</h4></Link>
        </div>
    );
};

export default CommentInfo;