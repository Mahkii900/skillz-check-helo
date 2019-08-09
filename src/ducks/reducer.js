//INITIAL STATE
const initialState = {
    username: '',
    id: '',
    profile_pic: ''
}

//ACTION CONSTS
const SET_USER = 'SET_USER'

//ACTION BUILDERS
export function setUser(user) {
    const {username, id, profile_pic} = user
    return {
        type: SET_USER,
        payload: {username, id, profile_pic}
    }
}

//REDUCER
export default (state = initialState, action) => {
    switch(action.type) {
        case SET_USER:
            const {id, username, profile_pic} = action.payload
            return {id, username, profile_pic}
        default: return state;
    }
}