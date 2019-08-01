import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class CustomizeQuiz extends Component {
	static propTypes = {};

	render() {
		return (
			<div className="customize">
				<button className="customize-button" onClick={() => this.props.onClick(1)}>
					1
				</button>
				<button className="customize-button" onClick={() => this.props.onClick(2)}>
					2
				</button>
				<button className="customize-button" onClick={() => this.props.onClick(3)}>
					3
				</button>
			</div>
		);
	}
}

export default CustomizeQuiz;
