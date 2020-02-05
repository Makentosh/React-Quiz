import React from "react";
import classes from './ActiveQuiz.scss'
import AnswerList from "./AnswersList/AnswersList";

const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>{ props.answerNumber }.&nbsp;</strong>
                {  props.qustion }
            </span>
            <small>{ props.answerNumber } из { props.quiezLength }</small>
        </p>
       <AnswerList
       state={props.state}
        onAnswerClick={props.onAnswerClick}
        answers={props.answers}
       />
    </div>
)


export default ActiveQuiz;
