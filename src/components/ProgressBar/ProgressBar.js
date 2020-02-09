import React from "react";
import "./ProgressBar.scss";
import PropTypes from "prop-types";
import {questionsCount} from "../../core/helpers/questionsCount";


const ProgressBar = ({step}) => {

    return (
        <div className="progress-container">
            <div className="progress-bar" style={{width: step * questionsCount + '%'}}>
                <div className="progress-bar__step">
                    {step}/{questionsCount}
                </div>
            </div>
        </div>
    )
};

ProgressBar.propTypes = {
    step: PropTypes.number
};

export default ProgressBar;

