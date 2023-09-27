import csrfFetch from "./csrf";
import { RECEIVE_POSTS } from "./post";

const RECEIVE_COMMENTS = 'comments/RECEIVE_COMMENTS';
const RECEIVE_COMMENT = 'comments/RECEIVE_COMMENT';

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
});

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});


export const getComments = state => {
    if (state.comments) {
        return Object.values(state.comments)
    } else {
        return []
    }
}

export const fetchComments = () => async dispatch => {
    const response = await csrfFetch('/api/comments');
    if (response.ok) {
        const comments = await response.json();
        dispatch(receiveComments(comments));
        return response;
    }
};

export const createComment = comment => async dispatch => {
    const { content, postId } = comment;
    const response = await csrfFetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({
            comment: {
                content,
                postId
            }
        })
    });
    const data = await response.json();
    if (response.ok) {
        dispatch(receiveComment(data.comment));
        return response;
    }
};

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = { ...state };
    switch (action.type) {
        case RECEIVE_COMMENT:
            return {
                ...nextState,
                [action.comment.id]: action.comment
            }
        case RECEIVE_COMMENTS:
            return {...nextState, ...action.comments};
        case RECEIVE_COMMENT:
            return {...nextState, [action.comment.id]: action.comment}
        case RECEIVE_POSTS:
            return {...nextState, ...action.data.comments}
        default:
            return state;
    };
};

export default commentsReducer;