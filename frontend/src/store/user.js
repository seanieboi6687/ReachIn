import csrfFetch from "./csrf";
import { RECEIVE_POSTS } from "./post";

export const RECEIVE_USERS = 'users/RECEIVE_USERS'

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
})

export const getUsers = state => {
    if(state.users) {
        return Object.values(state)
    } else {
        return []
    }
}

export const fetchUsers = () => async dispatch => {
    const response = await csrfFetch('/api/users')
    
    if (response.ok){
        const data = await response.json()
        dispatch(receiveUsers(data.users))
        return response
    }
}

const usersReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = {...state}
    switch(action.type) {
        case RECEIVE_USERS:
            return {...nextState, ...action.users}
        case RECEIVE_POSTS:
            return {...nextState, ...action.data.authors}
        default:
            return nextState
    }
}

export default usersReducer