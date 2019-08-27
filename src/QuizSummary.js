import React, { Component } from 'react';
import PropTypes from 'prop-types';

class QuizSummary extends Component {
	render() {
		const { correctAnswers, questionsCount, quizSet, redo, again } = this.props;
		return (
			<React.Fragment>
				<h1>Congrats!</h1>

				<div>
					<h2>Questions in this quiz were:</h2>
					<ul className="fa-ul summary-answers">
						{quizSet.map((quiz, i) => (
							<li key={i}>
								<span className="fa-li">
									<i
										className={
											correctAnswers.length && correctAnswers.includes(i) ? (
												'fas fa-check-circle correct'
											) : (
												'fas fa-times-circle incorrect'
											)
										}
									/>
								</span>
								{quiz.question}
							</li>
						))}
					</ul>
					<p className="text-with-border">
						Score: {correctAnswers.length} / {questionsCount}
					</p>
				</div>
				<div className="again">
					<button className="again-btn" onClick={redo}>
						Try again with the same questions
					</button>
					<button className="again-btn" onClick={again}>
						Another!
					</button>
				</div>
			</React.Fragment>
		);
	}
}

QuizSummary.propTypes = {
	correctAnswers : PropTypes.array,
	questionsCount : PropTypes.number,
	quizSet        : PropTypes.array,
	redo           : PropTypes.func,
	again          : PropTypes.func
};

export default QuizSummary;
