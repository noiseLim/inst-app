const postLoaded = (newPost) => {
    return {
        type: 'POST_LOADED',
        payload: newPost
    };
}

const postRequested = () => {
    return {
        type: 'POST_REQUESTED'
    };
}

const commentLoaded = (newComment) => {
    return {
        type: 'COMMENT_LOADED',
        payload: newComment
    };
}

const commentRequested = () => {
    return {
        type: 'COMMENT_REQUESTED'
    };
}

const postError = () => {
    return {
        type: 'POST_ERROR'
    };
}

const commentError = () => {
    return {
        type: 'COMMENT_ERROR'
    };
}

const addedToCommentList = (id) => {
    return {
        type: 'ITEM_ADD_TO_COMMENT_LIST',
        payload: id
    };
}

export {
    postLoaded,
    postRequested,
    commentLoaded,
    commentRequested,
    postError,
    commentError,
    addedToCommentList
};