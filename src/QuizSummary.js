import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class QuizSummary extends Component {
	render() {
		const { correctAnswers, questionsCount, quizSet } = this.props;
		return (
			<div>
				<h1 className="text-with-border">Congrats!</h1>
				<p className="score">
					Score: {correctAnswers.length} / {questionsCount}
				</p>
				<div>
					<h2 className="text-with-border">Questions in this quiz were:</h2>
					<ul className="fa-ul summary-answers">
						{quizSet.map((quiz, i) => (
							<li key={i}>
								<span className="fa-li">
									<i
										className={
											correctAnswers.length && correctAnswers.includes(i) ? (
												'fas fa-check-circle check-icon correct'
											) : (
												'fas fa-times-circle check-icon incorrect'
											)
										}
									/>
								</span>
								{quiz.question}
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

export default QuizSummary;
