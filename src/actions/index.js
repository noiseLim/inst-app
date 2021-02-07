const postLoaded = (newPost) => {
    return {
        type: 'POST_LOADED',
        payload: newPost
    };
}

export {
    postLoaded
};