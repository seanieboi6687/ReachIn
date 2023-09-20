import csrfFetch from "./csrf";

export const RECEIVE_POSTS = 'posts/RECEIVE_POSTS'

export const receivePosts = posts => {
    return {
        type: RECEIVE_POSTS,
        posts
    }
}

export const getPosts = state => {
    if  (state.posts) {
        return Object.values(state.posts)
    } else {
        return []
    }
}

export const fetchAllPosts = () => async dispatch => {
    const response = await csrfFetch('/api/posts')

    if (response.ok) {
        const data = await response.json();
        const posts = data.posts;
        dispatch(receivePosts(posts));
        return response
    }
}

const postsReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = {...state}
    switch(action.type){
        case RECEIVE_POSTS:
            return {...nextState, ...action.posts}
        default:
            return state
    }
}

export default postsReducer