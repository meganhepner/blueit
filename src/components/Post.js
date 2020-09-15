import React from "react";
import PropTypes from "prop-types";

function Post(props){
  return (
    <React.Fragment>
      <div onClick={() => props.whenPostClicked(props.id)}>
        <h3>{props.title}</h3>
        <p>{props.author} - {props.date}</p>
      </div>
    </React.Fragment>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  picture: PropTypes.string,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func,
};

export default Post;