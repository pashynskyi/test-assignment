import { usersAPI } from "../../api/api";

const SET_USERS = 'SET_USERS';
const SET_NEXT_URL = 'SET_NEXT_LINK';

let initialState = {
  isReady: false,
  users: '',
  nextUrl: null
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload],
        isReady: true
      };
    case SET_NEXT_URL:
      debugger;
      return {
        ...state,
        nextUrl: action.payload
      };
    default:
      return state;
  }
}

export const setUsers = (users) => ({ type: SET_USERS, payload: users })
export const setNextLink = (nextLink) => ({ type: SET_NEXT_URL, payload: nextLink })


export const requestUsers = () => {
  return (dispatch) => {
    usersAPI.getUsers().then(response => {
      dispatch(setUsers(response.users));
      dispatch(setNextLink(response.links.next_url))
    })
  }
}

export const requestNextUsers = (nextUrl) => {
  debugger;
  return (dispatch) => {
    usersAPI.getNextUsers(nextUrl).then(response => {
      dispatch(setUsers(response.users));
      dispatch(setNextLink(response.links.next_url))
    })
  }
}

export default usersReducer;