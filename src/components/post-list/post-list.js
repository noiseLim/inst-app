import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PostListItem from '../post-list-item';
import {connect} from 'react-redux';
import WithInstService from '../hoc';
import Error from '../error';
import Spinner from '../spinner';
import {postLoaded, postRequested, postError} from '../../actions';

import './post-list.scss'

const PostList = ({postRequested, InstService, postLoaded, postError}) => {
    
    // const dispatch = useDispatch();

    const postItems = useSelector(state => state.posts);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);
     // const commentItems = useSelector(state => state.comments);
     
    

    useEffect(() => {
        postRequested();
        InstService.getPostItems()
            .then(res => postLoaded(res))
            .catch(error => postError());

    // useEffect(() => {
    //     dispatch(postRequested());
    //     console.log(postRequested());
    //     InstService.getPostItems()
    //         .then(res => {
    //             dispatch(postLoaded(res));
    //             console.log(postLoaded(res));
    //         })
    //         .catch(error => {
    //             dispatch(postError());
    //             console.log(postError());
    //         });
            
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

// const mapStateToProps = (state) => {
//     return {
//         postItems: state.posts,
//         commentItems: state.comments,
//         loading: state.loading,
//         error: state.error
//     }
// }

const mapDispatchToProps = {
    postLoaded,
    postRequested,
    postError
    // commentLoaded,
    // commentRequested,
    // commentError
}

const View = ({items}) => {
    return (
        <ul className="post__list">
            {items}
        </ul>
    )
}

export default WithInstService()(connect(null, mapDispatchToProps)(PostList));
// export default WithInstService()(PostList);