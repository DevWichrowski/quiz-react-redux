import React from "react";
import "./ProgressBar.scss";
import {quizQuestions} from "../../core/questions";

const ProgressBar = ({step}) => {
    const questionsAmount = quizQuestions.length;

    return (
        <div className="progress-container">
            <div className="progress-bar" style={{width: step * questionsAmount + '%'}}>
                <div className="progress-bar__step">
                    {step}/{questionsAmount}
                </div>

            </div>
        </div>
    )
};

export default ProgressBar;