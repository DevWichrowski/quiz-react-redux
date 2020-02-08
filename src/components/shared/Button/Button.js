import React from 'react';
import "./Button.scss";
import PropTypes from "prop-types";

const Button = ({buttonText, className, onClick}) => {
    return (
        <div className={`${className ?? 'button'}`} onClick={onClick}>
            <p>{buttonText}</p>
        </div>
    );
};

Button.propTypes = {
    buttonText: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Button;