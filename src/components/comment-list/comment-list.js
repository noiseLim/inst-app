import React from 'react';
import CommentListItem from '../comment-list-item';

const CommentList = ({comments, onDelete}) => {

    const elements = comments.map((item) => {

        if (typeof item === 'object' && isEmpty(item)) {
            const {id, ...itemProps} = item
            return (
                <li key={id} className="list-group-item">
                    <CommentListItem {...itemProps} 
                    onDelete={() => onDelete(id)}/>
                </li>
            )
        }
    });

    function isEmpty(obj) {
        for (let key in obj) {
            return true;
        }
        return false;
    }

    return (
        <div className="app-list">
            {elements}
        </div>
    )
}

export default CommentList;