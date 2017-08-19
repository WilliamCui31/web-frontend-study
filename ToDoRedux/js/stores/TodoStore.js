import { createStore } from 'redux';
import rootReducer from '../reducers';

const todoStore = (initialState) => {
	const store = createStore(rootReducer, initialState);

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers');
			store.replaceReducer(nextReducer);
		});
	}

	return store;
}

export default todoStore;