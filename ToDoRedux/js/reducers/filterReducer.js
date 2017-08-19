import {
    VisibilityFilters
} from '../actions';

function filterReducer (filter = 'SHOW_ALL', action) {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default: 
            return filter;
    }
}

export default filterReducer;