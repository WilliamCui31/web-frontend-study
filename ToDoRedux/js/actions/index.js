'use strict';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        text
    }
}

export function editTodo(index, text) {
    return {
        type: 'EDIT_TODO',
        index,
        text
    }
}

export function deleteTodo(index) {
    return {
        type: 'DELETE_TODO',
        index
    }
}

export function toggleComplete(index) {
    return {
        type: 'TOGGLE_COMPLETE',
        index
    }
}

export function toggleAllComplete() {
    return { 
        type: 'TOGGLE_ALL_COMPLETE' 
    }
}

export function clearCompleted() {
    return {
        type: 'CLEAR_COMPLETED'
    }
}

export function setVisibilityFilter(filter) {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

