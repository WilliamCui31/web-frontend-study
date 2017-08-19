'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Footer from '../components/Footer';
import Header from '../components/Header';
import MainSection from '../components/MainSection';

import {
	clearCompleted
} from '../actions';

import '../../css/base.css';
import '../../css/app.css';

class TodoApp extends Component {

	render() {
		const { 
			todos,
			clearCompleted
		} = this.props;
		return (
			<div>
				<Header />
				<MainSection />
				<Footer 
					todos={todos}
					onClearCompleted={clearCompleted}
				/>
			</div>
		);
	}

};

TodoApp.propTypes = {
	todos: PropTypes.array.isRequired,
	clearCompleted: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	todos: state.todos
});

const mapDispatchToProps = dispatch => ({
	clearCompleted: () => dispatch(clearCompleted())
});


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoApp);