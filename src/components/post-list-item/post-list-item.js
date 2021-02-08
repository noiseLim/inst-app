import React from 'react';
import {Link} from 'react-router-dom';

import './post-list-item.scss';

const PostListItem = ({postItem}) => {

    const {title, url, category} = postItem;

    return (
        <li className="post__item">
            <Link to = {`/${postItem.id}`}>
                <div className="post__title">{title}</div>
                <img className="post__img" src={url} alt={title}></img>
                <div className="post__category">Category: <span>{category}</span></div>
                <button className="post__btn">Add comment</button>
                <span className = {`post__category_Img ${category}`}></span>
            </Link>      
        </li>
    )
}

export default PostListItem;