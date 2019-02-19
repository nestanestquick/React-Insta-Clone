import React from 'react';

const PostHeader = props => {
    return (
        <div>
            <div className="post-header">
                <img className="thumbnail-img" src={props.thumbnailUrl} alt="posting user's profile thumbnail" />
                <h3>{props.username}</h3>
            </div>
        </div>
    )
}

export default PostHeader