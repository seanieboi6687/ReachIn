import csrfFetch from "./csrf";

export const RECEIVE_POSTS = 'posts/RECEIVE_POSTS'
export const RECEIVE_POST = 'posts/RECEIVE_POST'

export const receivePosts = posts => {
    return {
        type: RECEIVE_POSTS,
        posts
    }
}

export const receivePost = post => {
    return {
        type: RECEIVE_POST,
        post
    }
}

export const getPosts = state => {
    if  (state.posts) {
        return Object.values(state.posts)
    } else {
        return []
    }
}

export const createPost = post => async dispatch => {
    const response = await csrfFetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(receivePost(data.post))
        return response
    }
}

export const updatePost = post => async dispatch => {
    const response = await csrfFetch(`/api/posts/${post.id}`, {
        method: 'PATCH',
        body: JSON.stringify(post),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok){
        const data = await response.json()
        dispatch(receivePost(data.post))
        return data
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
        case RECEIVE_POST:
            return {...nextState, [action.post.id]: action.post}
        default:
            return state
    }
}

export default postsReducer