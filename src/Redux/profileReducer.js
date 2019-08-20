import axios from "axios";
const initialState = {
  profile: [],
  loading: false
};

const GET_PROFILE = "GET_PROFILE";
const EDIT_PROFILE = "EDIT_PROFILE";



export function getProfile() {
  return {
    type: GET_PROFILE,
    payload: axios.get("/api/profile/").then(res => res.data)
  };
}

export function editProfile(e,username, first_name, last_name, age ) {
  e.preventDefault();
  return {
    type: EDIT_PROFILE,
    payload: axios
      .put(`/api/profile/${username}`, { first_name, last_name, age })
      .then(res => res.data)
  };
}


export default function profileReducer(state = initialState, action) {
    // console.log(action)
    switch (action.type) {
    case `${GET_PROFILE}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_PROFILE}_FULFILLED`:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case `${EDIT_PROFILE}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${EDIT_PROFILE}_FULFILLED`:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    
    default:
      return state;
  }
}


// 