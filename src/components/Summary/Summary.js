import React from 'react';
import "./Summary.scss";
import Header from "../shared/Header/Header";
import {connect} from "react-redux";
import {resetQuiz} from "../../store/actions/quiz.actions";
import {maxPoints} from "../../core/helpers/questionsCount";
import Button from "../shared/Button/Button";
import {Link, useHistory} from "react-router-dom";

const Summary = ({score, resetQuiz}) => {
    const history = useHistory();

    const retakeQuiz = () => {
        history.push("/quiz");
        resetQuiz();
    };

    return (
        <div className="summary">
            <Header headerText={"Summary"}/>
            <div className="summary__content">
                <div>
                    <h3>Thank you for participating in the quiz</h3>
                    <h2>Your score: {score}/{maxPoints}</h2>
                </div>
                <div className="buttons-container">
                    <Link to={"/"}>
                        <Button>Home</Button>
                    </Link>
                    <Button onClick={retakeQuiz} className="reset">Re-take quiz</Button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    score: state.quiz.score,
});

const mapDispatchToProps = dispatch => ({
    resetQuiz: () => dispatch(resetQuiz())
});

export default connect(mapStateToProps, mapDispatchToProps)(Summary);