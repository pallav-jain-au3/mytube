import React from "react";
import "./Comment.css";

const Comment = props => {
  return (
    <div className="row mb-2">
      <div className="col-md-2 text-right">
        <img src={props.image} className="profile-image" />
      </div>

      <div className="col-md-10 text-left">
        <h5>{props.authorName}</h5>
        <p>{props.comment}</p>
      </div>
    </div>
  );
};

export default Comment;
