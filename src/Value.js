import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Value extends Component {
	render() {
		return (
			<div className="lock-combination_value" onClick={() => this.props.onClick(this.props.index)}>
				<span>{this.props.currentValue}</span>
			</div>
		);
	}
}

Value.propTypes = {
	currentValue : PropTypes.number
};

export default Value;
