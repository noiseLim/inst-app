import React from 'react';
// import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
// import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import {connect} from 'react-redux';
import './comment-list-item.css';

const CommentListItem = ({label}) => {

    return (
        <div className="com-list-item">
            <span
            className="com-list-item-label">
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                {/* <button
                    type="button"
                    className="btn-star btn-sm"
                    onClick={onToggleLiked}>
                        <FavoriteBorderOutlinedIcon/>
                </button> */}
                {/* <button
                    type="button"
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                        <DeleteOutlineOutlinedIcon/>
                </button> */}
            </div>
        </div>
    )
}

const mapStateToProps = ({state}) => {
    return {
        label: state.comments
    }
}

export default connect(mapStateToProps)(CommentListItem);