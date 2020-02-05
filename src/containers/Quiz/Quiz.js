import React, { Component } from "react";
import classes from './Quiz.scss';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        quiz: [
            {
              question: 'Какого цвета небо?',
              rightAnswerId: 2,
              id: 1,
              answers: [
                  {text: 'Чорний', id: 1},
                  {text: 'Синий', id: 2},
                  {text: 'Красний', id: 3},
                  {text: 'Зелений', id: 4},
              ]
            },
            {
                question: 'В каком году основали Санкт Петербург',
                rightAnswerId: 4,
                id: 2,
                answers: [
                    {text: '1700', id: 1},
                    {text: '1725', id: 2},
                    {text: '1900', id: 3},
                    {text: '1703', id: 4},
                ]
            }
        ]
    };
    onAnswerClickHandler = answerId => {
        console.log("answer id ", answerId)
        this.setState({
            activeQuestion: this.state.activeQuestion + 1
        })
    };
    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Отетьте на все вопроси</h1>
                    <ActiveQuiz
                    answers={this.state.quiz[this.state.activeQuestion].answers}
                    qustion={this.state.quiz[this.state.activeQuestion].question}
                    onAnswerClick={this.onAnswerClickHandler}
                    quiezLength={this.state.quiz.length}
                    answerNumber={this.state.activeQuestion + 1}
                    />
                </div>
            </div>
        )
    }

}

export default Quiz;
