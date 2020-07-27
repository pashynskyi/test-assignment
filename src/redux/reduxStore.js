import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import usersReducer from './reducers/usersReducer';
import registerReducer from './reducers/registerReducer';

let reducers = combineReducers({
    users: usersReducer,
    register: registerReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;