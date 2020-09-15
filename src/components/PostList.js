import React from 'react';
import Post from './Post';
import PropTypes from "prop-types";

function PostList(props){
  return(
    <React.Fragment>
    <hr/>
    {props.postList.map((post) => 
      <Post
        whenPostClicked = { props.onPostSelection }
        title={post.title}
        author={post.author}
        body={post.body}
        date={post.date}
        picture={post.picture}
        id={post.id}
        key={post.id}/>
    )}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.array,
  onPostSelection: PropTypes.func
}


export default PostList;


