import React from 'react';
import "./Footer.scss";
import PropTypes from "prop-types";


const Footer = ({children, className}) => {
    return (
        <div className={`footer ${className ?? ''}`}>
            {children ?? null}
        </div>
    );
};

Footer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object
    ]),
    className: PropTypes.string
};

export default Footer;
