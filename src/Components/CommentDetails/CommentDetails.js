import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const CommentDetails = () => {
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
    const{commentId} = useParams()
    const [commentInfo,setCommentInfo] = useState([])
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments/${commentId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setCommentInfo(Object(data))
        })
    },[])
    const cardImageStyle = {
        width:'50px',
        height:'50px',
        borderRadius:'50px',
        backgroundColor:'lightgray',
        float: 'left',
        marginLeft:'20px',
        marginTop:'20px',
        marginRight:'20px'
    }
    
    return (
        <Card className={classes.root}>
            <div style = {cardImageStyle}>
               <img style ={{borderRadius:'50px'}} src="https://picsum.photos/id/3/50/50" alt="" />
            </div>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Name : {commentInfo.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Email : {commentInfo.email}
                </Typography>
                <Typography variant="body2" component="p">
                    Comment : {commentInfo.body}
                    <br />
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CommentDetails;