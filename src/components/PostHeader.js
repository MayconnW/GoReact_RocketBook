import React from "react";
import PropTypes from "prop-types";
import "./postheader.scss";

const PostHeader = props => {
  return (
    <div className="profile">
      <img src={props.avatar} alt="Imagem de perfil" />
      <div>
        <h3>{props.name}</h3>
        <strong>há {props.time}</strong>
      </div>
    </div>
  );
};

PostHeader.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  time: PropTypes.string
};

export default PostHeader;
