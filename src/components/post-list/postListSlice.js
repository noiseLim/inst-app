import {createSlice} from '@reduxjs/toolkit';

const postListSlice = createSlice({
    name: 'postList',
    initialState: {
        posts: [],
        loading: true,
        error: false
    },
    reducers: {
        postLoaded: (state, action) => {
            return {
                ...state,
                posts: action.payload,
                loading: false
            };
        },
        postRequested: (state) => {
            return {
                ...state,
                posts: state.posts,
                loading: true
            };
        },
        postError: (state) => {
            return {
                ...state,
                posts: state.posts,
                error: true
            };
        }
    }
})

export const {postLoaded, postRequested, postError} = postListSlice.actions

export default postListSlice.reducer