import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class QuizSummary extends Component {
	render() {
		const { correctAnswers, questionsCount, quizSet } = this.props;
		return (
			<div>
				<h1>Congrats!</h1>
				<p>
					Score: {correctAnswers.length} / {questionsCount}
				</p>
				<div>
					<h2>Questions in this quiz were:</h2>
					<ol className="summary-answers">
						{quizSet.map((quiz, i) => (
							<li
								key={i}
								className={correctAnswers.includes(i) ? 'summary-answers_correct' : 'summary-answers_incorrect'}
							>
								{quiz.question}
							</li>
						))}
					</ol>
				</div>
			</div>
		);
	}
}

export default QuizSummary;
