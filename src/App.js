import React from 'react';
import './App.css';
import Lock from './Lock';
import quiz from './quiz';
import CustomizeQuiz from './CustomizeQuiz';
import QuizSummary from './QuizSummary';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			questionsCount : null,
			questionIndex  : 0,
			quizSet        : null,
			question       : null,
			answer         : null,
			correctAnswers : [],
			quizFinished   : false
		};
	}

	shuffleArray(array) {
		// Fisher–Yates shuffle

		const shuffledArray = Array.from(array);

		for (let currentIndex = shuffledArray.length - 1; currentIndex > 0; currentIndex--) {
			let randomIndex = Math.floor(Math.random() * (currentIndex + 1)); // random index from 0 to i
			[
				shuffledArray[currentIndex],
				shuffledArray[randomIndex]
			] = [
				shuffledArray[randomIndex],
				shuffledArray[currentIndex]
			]; // swap elements
		}

		return shuffledArray;
	}

	createQuizSet = (quiz, questionsCount) => this.shuffleArray(quiz).slice(0, questionsCount);

	prepareFirstQuestion = (quizSet) => {
		const firstQuestion = quizSet[0];

		this.setState({
			quizSet,
			questionsCount : quizSet.length,
			question       : firstQuestion.question,
			answer         : firstQuestion.answer,
			questionIndex  : 0,
			correctAnswers : [],
			quizFinished   : false
		});
	};

	customizeQuiz = (questionsCount) => {
		const quizSet = this.createQuizSet(quiz, questionsCount);

		this.prepareFirstQuestion(quizSet);
	};

	nextQuestion = (quizSet) => {
		const currentQuestionIndex = this.state.questionIndex;
		const questionIndex = currentQuestionIndex + 1;

		if (questionIndex < quizSet.length) {
			this.setState({
				questionIndex,
				question      : quizSet[questionIndex].question,
				answer        : quizSet[questionIndex].answer
			});
		} else {
			this.setState({
				quizFinished : true
			});
		}
	};

	checkAnswer = (userAnswer) => {
		if (userAnswer === this.state.answer) {
			this.setState({
				correctAnswers : [
					...this.state.correctAnswers,
					this.state.questionIndex
				]
			});
		}
		this.nextQuestion(this.state.quizSet);
	};

	again = () => {
		this.setState({
			questionsCount : null,
			quizFinished   : false
		});
	};

	redo = () => {
		const quizSet = this.shuffleArray(this.state.quizSet);

		this.prepareFirstQuestion(quizSet);
	};

	isLongQuestion = () => (this.state.question.length > 100 ? 'question-long' : '');

	render() {
		const game = this.state.quizFinished ? (
			<QuizSummary
				correctAnswers={this.state.correctAnswers}
				questionsCount={this.state.questionsCount}
				quizSet={this.state.quizSet}
				redo={this.redo}
				again={this.again}
			/>
		) : !this.state.questionsCount ? (
			<CustomizeQuiz onClick={this.customizeQuiz} />
		) : (
			<Lock
				checkAnswer={this.checkAnswer}
				question={this.state.question}
				isLongQuestion={this.isLongQuestion}
				onClick={this.again}
			/>
		);

		return <div className="app-container">{game}</div>;
	}
}

export default App;
