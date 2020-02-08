import React, {useEffect, useState} from 'react';
import "./Quiz.scss";
import {quizQuestions} from "../../core/questions";
import {connect} from "react-redux";
import {addPoints, nextQuestion, resetQuiz} from "../../store/actions/quiz.actions";
import ProgressBar from "../ProgressBar/ProgressBar";

const Quiz = ({questionNumber, submit, resetQuiz, nextQuestion, ...props}) => {
    const [variantChosen, setVariantChosen] = useState(false);
    const [question, setQuestion] = useState(null);

    useEffect(() => {
        setQuestion(quizQuestions.find(question => question.id === questionNumber));
        setVariantChosen(false);
    }, [questionNumber]);

    const selectAnswer = e => {
        if (variantChosen) {
            return;
        }

        setVariantChosen(true);

        if (question.correctAnswer === e.target.value) {
            submit()
        }
    };

    return (
        <div className="quiz-container">
            {question != null && <ProgressBar step={question?.id}/> }
        <div className="quiz">
            <div className="question">{question?.content}</div>
            <div className="answers">
                {question && question.answers.map((answer, index) => <button
                    key={index} value={answer.variant}
                    onClick={e => selectAnswer(e)} className="variant">{answer.label}</button>)}
            </div>
            <div className="question-footer">
                <button onClick={resetQuiz} className="reset">Reset</button>
                {variantChosen && questionNumber !== quizQuestions.length ? (<button onClick={nextQuestion} className="next"><span>Next
                    question</span></button>) : variantChosen && questionNumber === quizQuestions.length ? (
                    <button onClick={nextQuestion} className="finish">Finish</button>) : null}
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