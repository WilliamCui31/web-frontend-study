import {
    ADD_TODO,
    EDIT_TODO,
    COMPLETE_TODO
} from '../actions';

function todoReducer (todos = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...todos,
                {
                    text: action.text,
                    completed: false
                }
            ];
        case 'EDIT_TODO':
            return [
                ...todos.slice(0, action.index),
                Object.assign({}, todos[action.index], {
                    text: action.text
                }),
                ...todos.slice(action.index + 1)
            ]
        case 'DELETE_TODO':
            return [
                ...todos.slice(0, action.index),
                ...todos.slice(action.index + 1)
            ]
        case 'TOGGLE_COMPLETE':
            return [
                ...todos.slice(0, action.index),
                Object.assign({}, todos[action.index], {
                    completed: !todos[action.index].completed
                }),
                ...todos.slice(action.index + 1)
            ];
        case 'TOGGLE_ALL_COMPLETE':
            let areAllCompleted=true;
            todos.forEach(todo => {
                if(!todo.completed) {
                    areAllCompleted = false;
                    return;
                }
            });
            return todos.map(todo => {
                todo.completed = !areAllCompleted;
                return todo;
            });
        case 'CLEAR_COMPLETED':
            return todos.filter(todo => {
                return !todo.completed;
            });
        default:
            return todos;
    }
}

export default todoReducer;