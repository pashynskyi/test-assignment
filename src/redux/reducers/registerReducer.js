import { registerAPI } from "../../api/api";

const SET_POSITIONS = 'SET_POSITIONS';

let initialState = {
  isReady: false,
  positions: '',
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSITIONS:
      return {
        ...state,
        positions: action.payload,
        isReady: true
      };
    default:
      return state;
  }
}

export const setPositions = (positions) => ({ type: SET_POSITIONS, payload: positions })


export const requestPositions = () => {
  return (dispatch) => {
    registerAPI.getPositions().then(response => {
      dispatch(setPositions(response.positions));
    })
  }
}

export default registerReducer;