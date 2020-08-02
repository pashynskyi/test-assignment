import { usersAPI } from "../../api/api";

const SET_USERS = 'SET_USERS';
const SET_NEXT_URL = 'SET_NEXT_LINK';
const UPDATE_USERS = 'UPDATE_USERS';
const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';

let initialState = {
  isReady: false,
  users: '',
  nextUrl: null,
  totalPages: ''
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
      return {
        ...state,
        nextUrl: action.payload
      };
    case SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload
      };
    case UPDATE_USERS:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
}

export const setUsers = (users) => ({ type: SET_USERS, payload: users })
export const setNextLink = (nextLink) => ({ type: SET_NEXT_URL, payload: nextLink })
export const updateUsers = (users) => ({ type: UPDATE_USERS, payload: users })
export const setTotalPages = (totalPages, currentPage) => ({ type: SET_TOTAL_PAGES, payload: { totalPages, currentPage } })


export const requestUsers = () => {
  return (dispatch) => {
    usersAPI.getUsers().then(response => {
      dispatch(setUsers(response.users));
      dispatch(setNextLink(response.links.next_url))
      dispatch(setTotalPages(response.total_pages, response.page))
    })
  }
}

export const requestNextUsers = (nextUrl) => {
  return (dispatch) => {
    usersAPI.getNextUsers(nextUrl).then(response => {
      dispatch(setUsers(response.users));
      dispatch(setNextLink(response.links.next_url))
      dispatch(setTotalPages(response.total_pages, response.page))
    })
  }
}

export const requestUpdatedUsers = () => {
  return (dispatch) => {
    usersAPI.getUsers().then(response => {
      dispatch(updateUsers(response.users));
      dispatch(setNextLink(response.links.next_url))
      dispatch(setTotalPages(response.total_pages, response.page))
    })
  }
}

export default usersReducer;