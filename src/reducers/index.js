const initialState = {
    posts: [],
    loading: true,
    error: false,
    comments: []
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'POST_LOADED':
            return {
                ...state,
                posts: action.payload,
                loading: false
            };
        case 'POST_REQUESTED':
            return {
                ...state,
                posts: state.posts,
                loading: true
            };
        case 'COMMENT_LOADED':
            return {
                ...state,
                comments: action.payload,
                loading: false
            };
        case 'COMMENT_REQUESTED':
            return {
                ...state,
                comments: state.comments,
                loading: true
            };
        case 'POST_ERROR':
            return {
                ...state,
                posts: state.posts,
                error: true
            };
        case 'COMMENT_ERROR':
            return {
                ...state,
                comments: state.comments,
                error: true
            }
        case 'ITEM_ADD_TO_COMMENT_LIST':
            const id = action.payload;
            const commentInState = state.comments.find(item => item.id === id);
            const newComment = {
                ...commentInState,
                commentInState
            }
            return {
                ...state,
                comments: [
                    ...state.comments.slice(0, newComment),
                    newComment,
                    ...state.comments.slice(newComment + 1)
                ]
            }
        default:
            return state;
    }
}

export default reducer;