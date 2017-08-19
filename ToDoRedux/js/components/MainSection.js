import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';

import {
	toggleAllComplete
} from '../actions';

class MainSection extends Component {

	render () {
		const { todos, toggleAllComplete } = this.props;

		let areAllCompleted = true;
		todos.forEach(todo => {
			if(!todo.completed) {
				areAllCompleted = false;
				return;
			}
		});

		return <section id='main'>
			{todos.length > 0 
			&& <input
				id='toggle-all'
				type='checkbox'
				onChange={toggleAllComplete}
				checked={areAllCompleted}
			/>}
			{todos.length > 0 && <label htmlFor="toggle-all">Mark all as complete</label>}
			<ul id='todo-list'>
				{todos.map((todo, index) => 
					<TodoItem 
						key={index} 
						todo={todo}
						index={index}
					/>
				)}
			</ul>
		</section>
	}

};

const mapStateToProps = state => ({
	todos: state.todos
});

const mapDispatchToProps = dispatch => ({
	toggleAllComplete: () => dispatch(toggleAllComplete())
});

MainSection.propTypes = {
	todos: PropTypes.array.isRequired,
	toggleAllComplete: PropTypes.func.isRequired
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MainSection);