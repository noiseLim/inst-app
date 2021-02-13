import React, {useState} from 'react';
import WithInstService from '../hoc';
// import {connect} from 'react-redux';
import './comment-add-form.css';

function CommentAddForm({InstService, postItem}) {

    const [text, setText] = useState('');
    const [maxId, setMaxId] = useState(1);

    const onSubmit = () => {
        setText('');
    }

    // const generateCommentOrder = (text) => {
    //     setMaxId(maxId + 1) 
    //     const newOrder = {
    //         label: text,
    //         id: maxId,
    //         postId: postItem
    //     }
    //     return newOrder;
    // }
    const generateCommentOrder = (text) => {
        setMaxId(maxId + 1) 
        const newOrder = text;
        return newOrder;
    }

    return (
        
        <form 
        className="bottom-panel d-flex"
        onSubmit={(e) => onSubmit(e.preventDefault())}>
            <input
                type="text"
                placeholder="Add a comment..."
                className="form-control new-post-label"
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <button
                type="submit"
                className="btn btn-outline-secondary"
                onClick={() => {InstService.setComment(generateCommentOrder(text), postItem)}}>
                Post</button>
        </form>
    )    
}

export default WithInstService()(CommentAddForm);