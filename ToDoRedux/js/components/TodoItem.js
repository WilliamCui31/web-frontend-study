import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';

import TodoTextInput from './TodoTextInput';

import {
	editTodo,
	deleteTodo,
	toggleComplete
} from '../actions';

class TodoItem extends Component {

	constructor (props) {
		super(props);
		this.state = {
			isEditing: false
		}
	}

	render () {
		const { todo, index } = this.props;
		return (
			<li
				className={classNames({
					'completed': todo.completed,
					'editing': this.state.isEditing 
				})}
				key={todo.id}>
				<div className='view'>
					<input 
						className='toggle'
						type='checkbox'
						checked={todo.completed}
						onChange={this._onToggleComplete.bind(this, index)}
					/>
					<label onDoubleClick={this._onDoubleClick.bind(this)}>
						{todo.text}
					</label>
					<button className='destroy' onClick={this._onDeleteTodo.bind(this, index)} />
				</div>
				{this.state.isEditing 
				&& <TodoTextInput
					className='edit'
					onSave={this._onEditTodo.bind(this, index)}
					value={todo.text}
				/>}
			</li>
		);
	}

	_onDoubleClick() {
		this.setState({
			isEditing: true
		})
	}

	_onEditTodo(index, text) {
		this.props.editTodo(index, text);
		this.setState({
			isEditing: false
		});
	}

	_onDeleteTodo(index) {
		this.props.deleteTodo(index);
	}

	_onToggleComplete(index) {
		this.props.toggleComplete(index);
	}

};

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	editTodo: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired,
	toggleComplete: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	todos: state.todos
});

const mapDispatchToProps = dispatch => ({
	editTodo: (index, text) => dispatch(editTodo(index, text)),
	deleteTodo: index => dispatch(deleteTodo(index)),
	toggleComplete: (index) => dispatch(toggleComplete(index))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoItem);