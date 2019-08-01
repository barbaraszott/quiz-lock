import React, { Component } from 'react';
import Value from './Value';
import PropTypes from 'prop-types';

class Lock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentInput : [
				0,
				0,
				0,
				0
			]
		};
	}

	changeValue = (index) => {
		const newValues = this.state.currentInput.map((value, i) => {
			if (i === index) {
				return value === 9 ? 0 : ++value;
			}
			return value;
		});

		this.setState({
			currentInput : newValues
		});
	};

	componentDidUpdate = (prevProps) => {
		if (this.props.question !== prevProps.question) {
			this.setState({
				currentInput : new Array(4).fill(0)
			});
		}
	};

	render() {
		return (
			<div className="lock">
				<div className="lock-combination">
					{this.state.currentInput.map((value, i) => (
						<Value currentValue={value} key={i} index={i} onClick={this.changeValue} />
					))}
				</div>
				<div className="lock-buttons">
					<button onClick={() => this.props.checkAnswer(this.state.currentInput.join(''))}>Check!</button>
				</div>
			</div>
		);
	}
}

Lock.propTypes = {
	checkAnswer : PropTypes.func,
	question    : PropTypes.string
};

export default Lock;
