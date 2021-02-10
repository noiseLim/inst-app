import React from 'react';
// import {Link} from 'react-router-dom';
import IconGrid from '../icon-grid';
import CommentList from '../comment-list';
import CommentAddForm from '../comment-add-form';

import './post-list-item.scss';

const PostListItem = ({postItem}) => {

    const {title, user, url} = postItem;

    return (
        <li className="post__item">
            {/* <Link to = {`/${postItem.id}`}> */}
            <div className="post__header">{user}</div>
            <img className="post__img" src={url} alt={title}></img>
            <IconGrid/>
            <div className="post__user"><span>{user}</span> {title}</div>
            <CommentList/>
            <CommentAddForm/>
            {/* onToggleImportant ={() => onToggleImportant(id)}
            onToggleLiked={() => onToggleLiked(id)} */}

            {/* <button className="post__btn">Add comment</button> */}
            {/* </Link>       */}
        </li>
    )
}

export default PostListItem;