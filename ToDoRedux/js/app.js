import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import TodoApp from '../js/views/TodoApp';
import TodoStore from './stores/TodoStore';

const store = TodoStore();

render(
	<Provider store={store}>
		<TodoApp />
	</Provider>,
	document.querySelector('#todoapp')
);