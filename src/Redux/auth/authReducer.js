//initialState
const initialState = {
    username: '',
    email: '',
   
}
//constants
const LOGOUT_USER = 'LOGOUT_USER'
const UPDATE_USERNAME = 'UPDATE_USERNAME';
const UPDATE_EMAIL = 'UPDATE_EMAIL';

//action creators
export function updateUsername(username) {
    return {
        type: UPDATE_USERNAME,
        payload: username
    }
}
export function updateEmail(email) {
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}
export function logoutUser(){
    return {
        type: LOGOUT_USER,
        payload: {
            username:'',
            email:''
        }
    }
}

//reducer
export default function authReducer(state=initialState, action) {
    switch(action.type) {
        case UPDATE_USERNAME:
            return {
                ...state,
                username: action.payload
            }
        case UPDATE_EMAIL:
            return {
                ...state,
               email: action.payload
            }
        case LOGOUT_USER:
            return {
                ...action.payload
            }
        default: return state;
    }
}