import React from 'react';
import {Link} from 'react-router-dom';

import './post-list-item.scss';

const PostListItem = ({postItem}) => {

    const {title, user, url} = postItem;

    return (
        <li className="post__item">
            <Link to = {`/${postItem.id}`}>
                <div className="post__title">{user}</div>
                <img className="post__img" src={url} alt={title}></img>
                <div className="post__category"><span>{user}</span> {title}</div>
                <button className="post__btn">Add comment</button>
            </Link>      
        </li>
    )
}

export default PostListItem;