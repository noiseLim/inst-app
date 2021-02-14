import React, {useEffect} from 'react';
import PostListItem from '../post-list-item';
import {connect} from 'react-redux';
import WithInstService from '../hoc';
import Error from '../error';
import Spinner from '../spinner';
import {postLoaded, postRequested, postError, commentRequested, commentLoaded, commentError} from '../../actions';

import './post-list.scss'

function PostList({postRequested, InstService, postLoaded, postError, commentRequested, commentLoaded, commentError, error, loading, postItems}) {

    useEffect(() => {
        postRequested();
        InstService.getPostItems()
            .then(res => postLoaded(res))
            .catch(error => postError());

        commentRequested();
        InstService.getCommentItems()
            .then(res => commentLoaded(res))
            .catch(error => commentError());
    }, [])

    if (error) {
        return <Error/>
    }
    if (loading) {
        return <Spinner/>
    }

    const items = postItems.map(postItem => {
        return <PostListItem
        key={postItem.id}
        postItem={postItem}/>
    })

    return (
        <View items={items}/>
    )
}

const mapStateToProps = (state) => {
    return {
        postItems: state.posts,
        commentItems: state.comments,
        loading: state.loading,
        error: state.error
    }
}

const maDispatchToProps = {
    postLoaded,
    postRequested,
    postError,
    commentLoaded,
    commentRequested,
    commentError
}

const View = ({items}) => {
    return (
        <ul className="post__list">
            {items}
        </ul>
    )
}

export default WithInstService()(connect(mapStateToProps, maDispatchToProps)(PostList));