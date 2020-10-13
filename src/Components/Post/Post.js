import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import './Post.css';
import { useHistory } from 'react-router-dom';

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

const Post = (props) => {
    const classes = useStyles();
    const { id, title } = props.post;
    const history = useHistory();
    const handleReadMore = (postId)=>{
        const url = `/post/${postId}`
        history.push(url);
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography component="div" style={{ backgroundColor: '#333'}} />
                <Card className={classes.root} className ="post-card">
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Word of the Day
                        </Typography>

                        <Typography className={classes.pos} color="textSecondary">
                            Post : {id}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {title}
                            <br />
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick = {() => handleReadMore(id)}>Detail</Button>
                    </CardActions>
                </Card>
            </Container>
        </React.Fragment>
    );
};

export default Post;