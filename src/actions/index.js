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

export {
    postLoaded,
    postRequested,
    postError
};