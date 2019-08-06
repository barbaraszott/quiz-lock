import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export class CustomizeQuiz extends Component {
	static propTypes = {};

	render() {
		return (
			<div className="customize">
				<button className="customize-button" onClick={() => this.props.onClick(5)}>
					5
				</button>
				<button className="customize-button" onClick={() => this.props.onClick(10)}>
					10
				</button>
				<button className="customize-button" onClick={() => this.props.onClick(15)}>
					15
				</button>
			</div>
		);
	}
}

export default CustomizeQuiz;
