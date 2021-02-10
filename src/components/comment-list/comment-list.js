import React from 'react';
import CommentListItem from '../comment-list-item';
import {connect} from 'react-redux';
import {addedToComment} from '../../actions';

const CommentList = ({commentItems}) => {

    const elements = commentItems.map((item) => {

        if (typeof item === 'object' && isEmpty(item)) {
            const {id, ...itemProps} = item
            return (
                <li key={id} className="list-group-item">
                    <CommentListItem {...itemProps}
                    onAddToComment={() => addedToComment(item.id)}/>
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

const mapStateToProps = (state) => {
    return {
        commentItems: state.comments
    }
}

const maDispatchToProps = {
    addedToComment
}

export default connect(mapStateToProps, maDispatchToProps)(CommentList);