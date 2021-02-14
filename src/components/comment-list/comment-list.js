import React from 'react';
import CommentListItem from '../comment-list-item';
import WithInstService from '../hoc';
import {connect} from 'react-redux';
import Error from '../error';
import Spinner from '../spinner';

function CommentList({commentItems, error, loading}) {

    if (error) {
        return <Error/>
    }
    if (loading) {
        return <Spinner/>
    }

    const elements = commentItems.map((commentItem) => {
        return (
            <li key={commentItem.id} className="list-group-item">
                <CommentListItem
                    commentItem={commentItem}/>
            </li>
        )
        

    })
    console.log(commentItems);

    return (
        <div className="app-list">
            {elements}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        commentItems: state.comments,
        loading: state.loading,
        error: state.error
    }
}


export default WithInstService()(connect(mapStateToProps, null)(CommentList));