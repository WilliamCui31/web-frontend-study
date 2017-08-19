import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {

	render () {
		const { todos, onClearCompleted } = this.props;
		const total = Object.keys(todos).length;

		if(total === 0){
			return null;
		}

		let completed = 0;
		for (let key in todos) {
			if (todos[key].completed) {
				completed++;
			}
		}

		const itemsLeft = total-completed;
		let itemsLeftPhrase = (itemsLeft === 1) ? 'item' : 'items';
		itemsLeftPhrase += 'left';

		let clearCompletedButton;
		if (completed) {
			clearCompletedButton = <button
				id='clear-completed'
				onClick={onClearCompleted}>
				Clear completed ({completed})
			</button>;
		}
		
		return <footer id='footer'>
			{itemsLeft > 0 && <span id='todo-count'>
				<strong>
					{itemsLeft}
				</strong>
				{itemsLeftPhrase}
			</span>}
			{clearCompletedButton}
		</footer>;

	}

};

Footer.propTypes = {
	todos: PropTypes.array.isRequired,
	onClearCompleted: PropTypes.func.isRequired
}

export default Footer;