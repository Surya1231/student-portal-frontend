import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { notesReducer } from './reducers/notesReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  notes: notesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
