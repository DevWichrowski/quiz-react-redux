import React from 'react';
import "./Header.scss";
import PropTypes from "prop-types";

const Footer = ({footerText, style}) => {
    return (
        <div className="header" style={style}>
            <h2>{footerText}</h2>
        </div>
    );
};

Footer.propTypes = {
    footerText: PropTypes.string.isRequired,
    style: PropTypes.object
};

export default Footer;