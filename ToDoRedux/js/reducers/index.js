import { combineReducers } from 'redux';
import todos from './todosReducer';
import filter from './filterReducer';

const todoReducer = combineReducers({
    todos,
    filter
});

export default todoReducer;