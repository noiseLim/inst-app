import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PostListItem from '../post-list-item';
import WithInstService from '../hoc';
import Error from '../error';
import Spinner from '../spinner';
// import {postLoaded, postRequested, postError} from '../../actions';
import {postLoaded, postRequested} from './postListSlice';

import './post-list.scss'

const PostList = ({InstService}) => {
    
    const dispatch = useDispatch();

    const postItems = useSelector(state => state.posts);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);
     // const commentItems = useSelector(state => state.comments);

    useEffect(() => {
        dispatch(postRequested())
        InstService.getPostItems()
            .then(res => dispatch(postLoaded(res)))
            // .catch(error => dispatch(postError()))
            
        // commentRequested();
        // InstService.getCommentItems()
        //     .then(res => commentLoaded(res))
        //     .catch(error => commentError());
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

const View = ({items}) => {
    return (
        <ul className="post__list">
            {items}
        </ul>
    )
}

export default WithInstService()(PostList);