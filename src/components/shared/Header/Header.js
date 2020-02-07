import React from 'react';
import "./Header.scss";
import PropTypes from "prop-types";

const Header = ({headerText, style}) => {
    return (
        <div className="header" style={style}>
            <h2>{headerText}</h2>
        </div>
    );
};

Header.propTypes = {
    headerText: PropTypes.string.isRequired,
    style: PropTypes.object
};

export default Header;