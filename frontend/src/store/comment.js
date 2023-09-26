import csrfFetch from "./csrf";

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

export const getComment = commentId => state => {
    if (state.entities.comments && state.entities.comments[commentId]) {
        return state.entities.comments[commentId];
    } else {
        return null;
    }
};

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

export const fetchComment = comment => async dispatch => {
    const response = await csrfFetch(`/api/comments/${comment.id}`);
    if (response.ok) {
        const data = await response.json();
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
        default:
            return state;
    };
};

export default commentsReducer;