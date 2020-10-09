import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';

const roorReducer = combineReducers({
  user: userReducer,
});

const store = createStore(roorReducer, applyMiddleware(thunk));

export default store;
