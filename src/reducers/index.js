const initialState = {
    post: [],
    loading: true,
    error: false
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
        default:
            return state;
    }
}

export default reducer;