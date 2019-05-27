import React from "react";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader";
import "./post.scss";

const Post = props => {
  return (
    <div className="post-info">
      <PostHeader {...props} />
      <p>{props.post}</p>
    </div>
  );
};

Post.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  time: PropTypes.string,
  post: PropTypes.string
};

export default Post;
