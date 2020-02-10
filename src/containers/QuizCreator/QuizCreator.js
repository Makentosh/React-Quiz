import React, {Component} from "react";
import classes from './QuizCreator.scss';
import Button from "../../components/UI/Button/Button";
import { createControl } from '../form/formFramework'
import Input from "../../components/UI/Input/Input";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

function createOptionControl(number) {
    return createControl({
          label: `Вариант ${number}`,
          errorMessage: 'Значение не может бить пустим',
          id: number
      }, {required: true})
}

function createFormControls() {
    return {
        question: createControl({
            label: 'Введите вопрос',
            errorMessage: 'Вопрос не может бить пустим'
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4)
    }
}

export default class QuizCreator extends Component {
    state = {
        quiz: [],
        formControls: createFormControls()
    };

    submitHandler = event => {
        event.preventDefault()
    };

    addQuestionHandler = () => {

    };

    createQuizHandler = () => {

    };

    changeHandler = (value, controlName) => {

    };

    renderControls() {
        return  Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            return (
               <Auxiliary key={controlName + index}>
                   <Input
                       key={controlName + index}
                       type={control.type}
                       value={control.value}
                       valid={control.valid}
                       touched={control.touched}
                       label={control.label}
                       errorMessage={control.errorMessage}
                       shouldValidate={!!control.validation}
                       onChange={event => this.changeHandler(event.target.value, controlName)}
                   />
                   {index === 0 ? <hr/> : null}
               </Auxiliary>
            )
        })
    }

    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Создание теста</h1>

                    <form
                    onSubmit={this.submitHandler}>
                        { this.renderControls() }

                        <select></select>
                        <Button
                            type="primary"
                            onClick={this.addQuestionHandler}
                        >Добавить вопрос</Button>
                        <Button
                            type="success"
                            onClick={this.createQuizHandler}
                        >Создать тест</Button>
                    </form>
                </div>

            </div>
        )
    }

}
