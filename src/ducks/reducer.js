//INITIAL STATE
const initialState = {
    username: '',
    profile_pic: ''
}

//ACTION CONSTS
const SET_USER = 'SET_USER'
const CLEAR_STATE = 'CLEAR_STATE'

//ACTION BUILDERS
export function setUser(user) {
    const {username, profile_pic} = user
    return {
        type: SET_USER,
        payload: {username, profile_pic}
    }
}

export function clearState() {
    return {
        type: CLEAR_STATE
    }
}

//REDUCER
export default (state = initialState, action) => {
    switch(action.type) {
        case SET_USER:
            var {username, profile_pic} = action.payload
            return {username, profile_pic}
        case CLEAR_STATE:
            var username = ''
            var profile_pic = ''
            return {username, profile_pic}
        default: return state;
    }
}