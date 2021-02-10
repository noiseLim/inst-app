import React, {useState} from 'react';
import {connect} from 'react-redux';
import WithInstService from '../hoc';
import './comment-add-form.css';

function CommentAddForm({InstService}) {

    const [text, setText] = useState('');
    const [maxId, setMaxId] = useState(1);
    console.log(text);

    const onSubmit = () => {
        setText('');
    }

    const generateCommentOrder = (text) => {
        setMaxId(maxId + 1) 
        const newOrder = {
            label: text,
            id: maxId
        }
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
                onClick={() => {InstService.setComment(generateCommentOrder(text))}}>
                Post</button>
        </form>
    )    
}

const mapDispatchToProps = ({text}) => {
    console.log(text);
    return {
        comments: text
    }
}

export default WithInstService()(connect(null, mapDispatchToProps)(CommentAddForm));