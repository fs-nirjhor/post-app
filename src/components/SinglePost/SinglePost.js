import * as React from 'react';
import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import RecommendIcon from '@mui/icons-material/Recommend';
import ChatIcon from '@mui/icons-material/Chat';
import {Link} from 'react-router-dom' ;

const SinglePost = (props) => {
  const {post} = props;
  const [likeStyle, setLikeStyle] = useState("");
  const handleLikeStyle = () => {
    const newStyle = likeStyle ? "" : "primary";
    setLikeStyle(newStyle);
  };
return (
  <div>
    <Card sx={{ margin: 2 }} key={post.id}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align='center'>
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.body}
          </Typography>
        </CardContent>
      </CardActionArea>
      { 
      props.isButton &&
      <CardActions>
        <IconButton aria-label="add to recommend">
          <RecommendIcon onClick={handleLikeStyle} color={likeStyle} fontSize="large"/>
        </IconButton>
      <Link to={`comments/${post.id}`}>
          <IconButton aria-label="share">
          <ChatIcon color="primary" fontSize="large"/>
        </IconButton>
       </Link>
      </CardActions>
      }
    </Card>
  </div>
);
};

export default SinglePost;