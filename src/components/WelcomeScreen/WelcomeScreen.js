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
            <Header headerText={"Welcome in React Quiz"}/>
            <div className="welcome-screen__content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aliquid animi cum deleniti
                    doloremque ea eveniet illum ipsum iure maiores minus modi molestiae necessitatibus optio placeat
                    quaerat quis quos sapiente?</p>
            </div>

            <Button buttonText={"Start Quiz"} onClick={startQuiz}/>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    start: () => dispatch(startQuiz())
});

export default connect(null, mapDispatchToProps)(WelcomeScreen)