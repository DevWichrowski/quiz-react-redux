
import React from "react";
import "./ProgressBar.scss";

const ProgressBar = ({step}) => {


    return (
        <div className="progress-container">
            <div className="progress-bar" style={{width: step*10 + '%'}}>
                <div className="step">
                    {step}/10
                </div>

            </div>
        </div>
    )
};

export default ProgressBar;