import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoTextInput from './TodoTextInput';
import { addTodo } from '../actions';

class Header extends Component {

	render() {
		const { addTodo } = this.props;

		return <header id='header'>
			<h1>todos <span style={{fontSize: '14px'}}>(redux)</span></h1>
			<TodoTextInput
				id='new-todo'
				placeholder='What needs to be done?'
				onSave={addTodo}
			/>
		</header>;
	}

};

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch) => ({
	addTodo: text => dispatch(addTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);