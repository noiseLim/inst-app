import React, {Component} from 'react';
import PostListItem from '../post-list-item';
import {connect} from 'react-redux';
import WithInstService from '../hoc';
import Error from '../error';
import Spinner from '../spinner';
import {postLoaded, postRequested, postError} from '../../actions';

import './post-list.scss'

class PostList extends Component {
    componentDidMount() {
        this.props.postRequested();

        const {InstService} = this.props;
        InstService.getPostItems()
            .then(res => this.props.postLoaded(res))
            .catch(error => this.props.menuError());
    }

    render() {
        const {postItems, loading, error} = this.props;

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
}

const mapStateToProps = (state) => {
    return {
        postItems: state.post,
        loading: state.loading,
        error: state.error
    }
}

const maDispatchToProps = {
    postLoaded,
    postRequested,
    postError
}

const View = ({items}) => {
    return (
        <ul className="post__list">
            {items}
        </ul>
    )
}

export default WithInstService()(connect(mapStateToProps, maDispatchToProps)(PostList));