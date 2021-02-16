import {createSlice} from '@reduxjs/toolkit';

const postListSlice = createSlice({
    name: 'postList',
    initialState: {
        posts: [],
        loading: true,
        error: false
    },
    reducers: {
        postLoaded: {
            reducer(state, action) {
                const {posts} = action.payload
                state({posts, loading: false})
            },
            prepare(newPost) {
                return {payload: newPost}
            }
        },
        postRequested(state, action) {
            const {posts} = state.posts
            state({posts, loading: true})
        }
    }
})

export const {postLoaded, postRequested} = postListSlice.actions

export default postListSlice.reducer