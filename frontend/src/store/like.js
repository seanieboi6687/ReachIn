import csrfFetch from "./csrf";
import { RECEIVE_POSTS } from "./post";

export const RECEIVE_LIKE = 'likes/RECEIVE_LIKE';
export const RECEIVE_LIKES = 'likes/RECEIVE_LIKES'
export const REMOVE_LIKE = 'likes/REMOVE_LIKE';

const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
});

const receiveLikes = data => ({
    type: RECEIVE_LIKES,
    data
})

const removeLike = likeId => ({
    type: REMOVE_LIKE,
    likeId
});

export const getLikes = state => {
    if (state.likes) {
        return Object.values(state.likes)
    } else {
        return []
    }
}

export const fetchAllLikes = () => async dispatch => {
    const response = await csrfFetch('/api/likes')

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveLikes(data));
        return response
    }
}

export const createLike = like => async dispatch => {
    const { likerId, postId } = like;
    const response = await csrfFetch('/api/likes', {
        method: 'POST',
        body: JSON.stringify({
            like: {
                likerId,
                postId
            }
        })
    });
    const data = await response.json();
    if (response.ok) {
        dispatch(receiveLike(data.like));
        return response;
    }
};

export const deleteLike = likeId => async dispatch => {
    const response = await csrfFetch(`/api/likes/${likeId}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        dispatch(removeLike(likeId));
    }
};

const likesReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = { ...state }
    switch (action.type) {
        case RECEIVE_POSTS:
            return {...nextState, ...action.data.likes}
        case RECEIVE_LIKES:
            return { ...nextState, ...action.data.likes }
        case RECEIVE_LIKE:
            return {...nextState, [action.like.id]: action.like}
        case REMOVE_LIKE:
            delete nextState[action.likeId];
            return nextState;
        default:
            return state;
    };
};

export default likesReducer;