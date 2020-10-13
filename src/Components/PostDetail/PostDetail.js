import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const PostDetail = () => {
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  const classes = useStyles();
  const {postId} = useParams()
  const [postDetail,setPostDetail]= useState({})
  useEffect(()=>{
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setPostDetail(data);
    })
  },[])
 
  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            Post Detail :
          </Typography>
          <Typography variant="body2" component="p">
            {postDetail.body}
            <br />
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostDetail;