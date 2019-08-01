import React from 'react';
import './App.css';
import Lock from './Lock';
// import Value from './Value';
import quiz from './quiz';
import CustomizeQuiz from './CustomizeQuiz';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			questionsCount : null,
			questionIndex  : 0,
			quizSet        : null,
			question       : null,
			answer         : null
		};
	}

	shuffleArray(array) {
		// Fisher–Yates shuffle

		const shuffledArray = Array.from(array);
		// QUESTIONS: Do we have to create new array here, or not neccessary?

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

	createQuizSet = (quiz, questionsCount) => {
		// QUESTION: can this be done in quiz.js?

		return this.shuffleArray(quiz).slice(0, questionsCount);
	};

	customizeQuiz = (questionsCount) => {
		const quizSet = this.createQuizSet(quiz, questionsCount);
		const firstQuestion = quizSet[0];

		this.setState({
			quizSet,
			questionsCount,
			question       : firstQuestion.question,
			answer         : firstQuestion.answer
		});
	};

	nextQuestion = (quizSet) => {
		const currentQuestionIndex = this.state.questionIndex;
		const questionIndex = currentQuestionIndex === quizSet.length - 1 ? 0 : currentQuestionIndex + 1;
		// LATER: after finishing quiz set msg to user with score and Q about next round -> create new quizSet etc

		this.setState({
			questionIndex,
			question      : quizSet[questionIndex].question,
			answer        : quizSet[questionIndex].answer
		});
	};

	checkAnswer = (userAnswer) => {
		const message = userAnswer === this.state.answer ? 'Yay! Well done!' : 'Nope, sadly that is wrong answer.';
		window.alert(message);

		this.nextQuestion(this.state.quizSet);
	};

	render() {
		console.log(this.state);

		if (!this.state.questionsCount) {
			return (
				<div className="app-container">
					<h1>Hello! How many questions do You want to have in this quiz?</h1>
					<CustomizeQuiz onClick={this.customizeQuiz} />
				</div>
			);
		}

		return (
			<div className="app-container">
				<h1>{this.state.question}</h1>
				<Lock checkAnswer={this.checkAnswer} question={this.state.question} />
			</div>
		);
	}
}

export default App;
