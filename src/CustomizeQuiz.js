import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CustomizeQuiz.scss';

export class CustomizeQuiz extends Component {
	render() {
		return (
			<React.Fragment>
				<h1>Hello! How many questions do You want to have in this quiz?</h1>
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
			</React.Fragment>
		);
	}
}

CustomizeQuiz.propTypes = {
	onClick : PropTypes.func
};

export default CustomizeQuiz;
