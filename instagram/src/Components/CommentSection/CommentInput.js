import React from 'react';

const CommentInput = props => {
    return (
        <div className="comment-input">

        <form onSubmit={props.handleAddComment}>

            <input onChange={props.handleChange} value = {props.comment}className="input-comment" type="text" placeholder="Add a comment..."/>

        </form>
            <img className="comment-dots" src="https://img.icons8.com/ios-glyphs/30/000000/more.png" alt="more options"></img>
    </div>  
    )
}

export default CommentInput