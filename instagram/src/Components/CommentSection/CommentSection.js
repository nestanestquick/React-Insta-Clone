import React from "react";
import '../PostContainer/PostContainer.css'
import CommentInput from './CommentInput';

const Comment = props => {
    return (
        <div>
            <p className="comment-text"><strong>{props.user}</strong> {props.text}</p>
        </div>
    )
}

export default Comment