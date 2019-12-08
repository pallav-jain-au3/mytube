import React, { Component } from 'react';
import './Comment.css'

const Comment = (props) => {
    return (
        <div>
        <p><span className = "font-weight-bold">{props.authorName}</span>
        <br />
        {props.comment}</p>
        
        </div>
      );
}
 
export default Comment;