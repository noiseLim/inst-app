const initialState = {
    post: [],
    loading: true,
    error: false,
    comments: []
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'POST_LOADED':
            return {
                ...state,
                post: action.payload,
                loading: false
            };
        case 'POST_REQUESTED':
            return {
                ...state,
                post: state.post,
                loading: true
            };
        case 'POST_ERROR':
            return {
                ...state,
                post: state.menu,
                error: true
            }
        case 'ITEM_ADD_TO_COMMENT':
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