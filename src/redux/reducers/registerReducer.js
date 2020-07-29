import { registerAPI } from "../../api/api";

const SET_POSITIONS = 'SET_POSITIONS';
const SET_TOKEN = 'SET_TOKEN';
const SET_NEW_USER = 'NEW_USER';

let initialState = {
  token: '',
  isReady: false,
  positions: '',
  newUser: ''
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSITIONS:
      return {
        ...state,
        positions: action.payload,
        isReady: true
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    case SET_NEW_USER:
      debugger;
      return {
        ...state,
        newUser: action.payload
      };

    default:
      return state;
  }
}

export const setPositions = (positions) => ({ type: SET_POSITIONS, payload: positions })
export const setToken = (token) => ({ type: SET_TOKEN, payload: token })
export const newUser = (newUser) => ({ type: SET_NEW_USER, payload: newUser })


export const requestToken = () => {
  return (dispatch) => {
    registerAPI.getToken().then(response => {
      dispatch(setToken(response.token));
    })
  }
}

export const requestPositions = () => {
  return (dispatch) => {
    registerAPI.getPositions().then(response => {
      dispatch(setPositions(response.positions));
    })
  }
}

export const registerUser = (registerData, selectedPhoto, token) => {
  return (dispatch) => {
    registerAPI.postUser(registerData, selectedPhoto, token).then(response => {
      dispatch(newUser(response))
    })
  }
}

export default registerReducer;