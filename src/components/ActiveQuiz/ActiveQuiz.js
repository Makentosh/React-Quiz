import React from "react";
import classes from './ActiveQuiz.scss'
import AnswerList from "./AnswersList/AnswersList";

const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>2.&nbsp;</strong>
                Как дела?
            </span>
            <small>4 из 12</small>
        </p>
       <AnswerList
        answers={props.answers}
       />
    </div>
)


export default ActiveQuiz;
