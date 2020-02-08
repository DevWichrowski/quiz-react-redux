import React from 'react';
import "./Header.scss";
import PropTypes from "prop-types";

const Header = ({headerText, className}) => {
    return (
        <div className={`${className ?? 'header'}`}>
            <h2>{headerText}</h2>
        </div>
    );
};

Header.propTypes = {
    headerText: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Header;