import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ENTER_KEY_CODE=13;

class TodoTextInput extends Component {

	constructor (props) {
		super(props);
		this.state = {
			value: this.props.value || ''
		};
	}

	render () {
		return (
			<input 
				className={this.props.className}
				id={this.props.id}
				placeholder={this.props.placeholder}
				onBlur={this._save.bind(this)}
				onChange={this._onChange.bind(this)}
				onKeyDown={this._onKeyDown.bind(this)}
				value={this.state.value}
				autoFocus={true}
			/>
		);
	}

	_save(event) {
		if(this.state.value.trim()) {
			this.props.onSave(this.state.value);
		}
		this.setState({
			value: ''
		});
	}

	_onChange(event) {
		this.setState({
			value: event.target.value
		});
	}

	_onKeyDown(event) {
		if(event.keyCode===ENTER_KEY_CODE) {
			this._save();
		}
	}

};

TodoTextInput.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string,
	placeholder: PropTypes.string,
	onSave: PropTypes.func.isRequired,
	value: PropTypes.string
}

export default TodoTextInput;