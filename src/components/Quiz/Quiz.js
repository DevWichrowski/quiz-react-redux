import React, {useEffect, useState} from 'react';
import "./Quiz.scss";
import {quizQuestions} from "../../core/questions";
import {connect} from "react-redux";
import {nextQuestion, resetQuiz, addPoints} from "../../store/actions/quiz.actions";

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
        <div className="quiz">
            <h1>HEADER</h1>
            <div>{question && question.content}</div>

            <div>{question && question.answers.map((answer, index) => <button
                key={index} value={answer.variant}
                onClick={e => selectAnswer(e)}>{answer.label}</button>)}</div>
            <footer style={{marginTop: '50px'}}>
                <button onClick={resetQuiz}>Reset</button>
                {variantChosen && questionNumber !== quizQuestions.length ? (<button onClick={nextQuestion}>Next
                    question</button>) : variantChosen && questionNumber === quizQuestions.length ? (
                    <button onClick={nextQuestion}>Finish</button>) : null}
            </footer>
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