const SET_USERS = 'SET_USERS';

let initialState = {
  isReady: false,
  users: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
        isReady: true
      };
    default:
      return state;
  }
}

export const setUsers = (users) => ({ type: SET_USERS, payload: users })


export default usersReducer;