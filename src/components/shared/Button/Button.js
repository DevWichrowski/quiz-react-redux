import React from 'react';
import "./Button.scss";
import PropTypes from "prop-types";

const Button = ({buttonText, style, onClick}) => {
    return (
        <div className="button" style={style} onClick={onClick}>
            <p>{buttonText}</p>
        </div>
    );
};

Button.propTypes = {
    buttonText: PropTypes.string.isRequired,
    style: PropTypes.object
};

export default Button;