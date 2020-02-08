import React from 'react';
import "./WelcomeScreen.scss";
import Header from "../shared/Header/Header";
import Button from "../shared/Button/Button";
import {useHistory} from 'react-router-dom';
import {connect} from "react-redux";
import {startQuiz} from "../../store/actions/quiz.actions";

const WelcomeScreen = ({start}) => {
    const history = useHistory();

    const startQuiz = () => {
        history.push("/quiz");
        start()
    };

    return (
        <div className="welcome-screen">
            <Header headerText={"Instructions"}/>
            <div className="welcome-screen__content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At doloremque expedita, nisi placeat provident
                quod ratione sed voluptate. Alias earum enim harum laudantium modi molestiae nihil officiis quae ut
                vitae.
            </div>

            <Button buttonText={"Start Quiz"} onClick={startQuiz}/>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    start: () => dispatch(startQuiz())
});

export default connect(null, mapDispatchToProps)(WelcomeScreen)