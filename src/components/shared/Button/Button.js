import React from 'react';
import "./Button.scss";
import PropTypes from "prop-types";

const Button = ({children, className, onClick}) => {
    return (
        <div className={`button ${className ?? ''}`} onClick={onClick}>
            <p>{children}</p>
        </div>
    );
};

Button.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Button;