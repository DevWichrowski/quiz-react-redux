import React from 'react';
import "./WelcomeScreen.scss";
import Header from "../shared/Header/Header";
import Button from "../shared/Button/Button";
import {useHistory} from 'react-router-dom';
import {connect} from "react-redux";
import {startQuiz} from "../../store/actions/quiz.actions";
import {questionsCount} from "../../core/helpers/questionsCount";


const WelcomeScreen = ({start}) => {
    const history = useHistory();

    const startQuiz = () => {
        history.push("/quiz");
        start()
    };

    return (
        <div className="welcome-screen">
            <Header headerText={"Instructions"}/>
            <div className="welcome-content">
                <ul>
                    <li>In this quiz you will have to answer to <strong>{questionsCount} questions.</strong></li>
                    <li>There is no time limit.</li>
                    <li>For a correct answer you will get <strong>5 points</strong>, for wrong answer <strong>0
                        points.</strong></li>
                    <li>Once you choose your answer you can't change it, so take your time.</li>
                </ul>

                <div className="button-container">
                    <Button onClick={startQuiz}>Start Quiz</Button>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    start: () => dispatch(startQuiz())
});

export default connect(null, mapDispatchToProps)(WelcomeScreen);
