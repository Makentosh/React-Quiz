import React, { Component } from "react";
import classes from './Quiz.scss';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
    state = {
      quiz: [
          {
              answers: [
                  {text: 'Вопрос один'},
                  {text: 'Вопрос 2'},
                  {text: 'Вопрос 2'},
                  {text: 'Вопрос 3'},
              ]
          }
      ]
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Отетьте на все вопроси</h1>
                    <ActiveQuiz
                    answers={this.state.quiz[0].answers}
                    />
                </div>
            </div>
        )
    }

}

export default Quiz;
