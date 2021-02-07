const initialState = {
    post: []
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'POST_LOADED':
            return {
                ...state,
                post: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;