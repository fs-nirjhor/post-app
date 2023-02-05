import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import SinglePost from "../SinglePost/SinglePost";
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';

const Comments = () => {
  const {postId} = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
  fetch(url)
  .then(res => res.json())
  .then(data => {
    setPost(data);
  });
  }, [postId]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setComments(data))
    .catch(error => alert(error));
  }, [postId]);
return (
  <div>
  <SinglePost post={post} />  
  <p align='center'><b>Comments: {comments.length}</b></p>
    {
      comments.map(comment => 
    <div key={comment.id}>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={`https://mui.com/static/images/avatar/${comments.indexOf(comment)+1}.jpg`} />
        </ListItemAvatar>
        <ListItemText
          primary={comment.name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {comment.email}
              </Typography>
              —{comment.body}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
    </div>
      )
    }
  </div>
);
};

export default Comments;

