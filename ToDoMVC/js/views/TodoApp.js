var Footer=require('../components/Footer');
var Header=require('../components/Header');
var MainSection=require('../components/MainSection');
var React=require('react');
var TodoStore=require('../stores/TodoStore');

require('../../css/base.css');
require('../../css/app.css');


function getTodoState(){
	return {
		allTodos: TodoStore.getAll(),
		areAllComplete: TodoStore.areAllComplete()
	};
}

var TodoApp=React.createClass({

	getInitialState: function(){
		return getTodoState();
	},

	componentDidMount: function(){
		TodoStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function(){
		TodoStore.removeChangeListener(this._onChange);
	},

	render: function(){
		return (
			<div>
				<Header />
				<MainSection 
					allTodos={this.state.allTodos}
					areAllComplete={this.state.areAllComplete}
				/>
				<Footer allTodos={this.state.allTodos} />
			</div>
		);
	},

	_onChange: function(){
		this.setState(getTodoState());
	}

});

module.exports=TodoApp;