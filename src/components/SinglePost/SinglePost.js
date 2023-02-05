import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {Link} from 'react-router-dom' ;

const SinglePost = (props) => {
  const {post} = props;
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
      { props.isButton &&
      <CardActions>
        <Button size="medium" color="primary" >
      <Link to={`comments/${post.id}`}>
          Comments
       </Link>
        </Button>
      </CardActions>}
    </Card>
  </div>
);
};

export default SinglePost;