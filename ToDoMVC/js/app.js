var React=require('react');
var ReactDOM=require('react-dom');
var TodoApp=require('../js/views/TodoApp');

ReactDOM.render(
	<TodoApp />,
	document.querySelector('#todoapp')
)