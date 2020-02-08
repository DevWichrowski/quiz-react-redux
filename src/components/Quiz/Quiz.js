import React, {useEffect, useState} from 'react';
import "./Quiz.scss";
import {quizQuestions} from "../../core/questions";
import {connect} from "react-redux";
import {addPoints, nextQuestion, resetQuiz} from "../../store/actions/quiz.actions";
import ProgressBar from "../ProgressBar/ProgressBar";
import Button from "../shared/Button/Button";

const Quiz = ({questionNumber, submit, resetQuiz, nextQuestion, ...props}) => {
    const [variantChosen, setVariantChosen] = useState(false);
    const [question, setQuestion] = useState(null);
    const quizLength = quizQuestions.length;

    useEffect(() => {
        setQuestion(quizQuestions.find(question => question.id === questionNumber));
        setVariantChosen(false);
    }, [questionNumber]);

    const selectAnswer = e => {
        if (variantChosen) {
            return;
        }

        setVariantChosen(e.variant);

        if (question.correctAnswer === e.variant) {
            submit()
        }
    };

    const reset = () => {
        resetQuiz();
        setVariantChosen(false);
    };

    return (
        <div className="quiz-container">
            {question != null && <ProgressBar step={question?.id}/>}
            {console.log(variantChosen)}
            <div className="quiz">
                <div className="quiz__question">{question?.content}</div>
                <div className="quiz__answers">
                    {question?.answers.map((answer, index) => <Button
                        key={index} value={answer.variant}
                        onClick={e => selectAnswer(answer)} className={`variant ${variantChosen ?
                        question.correctAnswer === answer.variant ?
                            'correct' : 'error' : null}`}>{answer.label}</Button>)}
                </div>
                <div className="question-footer">
                    <Button onClick={reset}>Reset</Button>
                    {variantChosen && questionNumber !== quizLength ?
                        (
                            <Button onClick={nextQuestion}
                                    className="question-footer__next"><span>Next question</span></Button>) :
                        variantChosen && questionNumber === quizLength ?
                            (<Button onClick={nextQuestion} className="question-footer__finish">Finish</Button>) :
                            null}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    questionNumber: state.quiz.questionNumber
});

const mapDispatchToProps = dispatch => ({
    submit: () => dispatch(addPoints()),
    resetQuiz: () => dispatch(resetQuiz()),
    nextQuestion: () => dispatch(nextQuestion())
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)