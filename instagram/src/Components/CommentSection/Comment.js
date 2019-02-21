import React from 'react';
import styled from 'styled-components';

const CommentText = styled.p`
    margin: 8px 0;
`

const Comment = props => {
    return (
        <div>
            <CommentText> 
                <strong>{props.user}</strong> {props.text}
                </CommentText>
        </div>
    )
}

export default Comment