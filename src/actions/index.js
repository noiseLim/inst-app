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

const postError = () => {
    return {
        type: 'POST_ERROR'
    };
}

const addedToComment = (id) => {
    return {
        type: 'ITEM_ADD_TO_COMMENT',
        payload: id
    };
}

export {
    postLoaded,
    postRequested,
    postError,
    addedToComment
};