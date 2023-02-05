
import {useContext} from "react";
import {PostContext} from "../Home/Home";
import SinglePost from "../SinglePost/SinglePost";

const Post = () => {
 const allPost = useContext(PostContext);
return (
  <div>
    <h1 align='center'>Total Post: {allPost.length}</h1>
    {
      allPost.map(post => <SinglePost post={post} isButton={true}/> )
    }
  </div>
    
  );
};

export default Post;
