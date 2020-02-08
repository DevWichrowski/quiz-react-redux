import React from 'react';
import "./Fooeter.scss";
import PropTypes from "prop-types";

const Footer = ({footerText, style}) => {
    return (
        <div className="footer" style={style}>
            <div>Created by DevWichrowski</div>
            <ul>
                <li>
                    <a href="#"><i className="fab fa-linkedin-in icon"/></a></li>
                <li>
                    <a href="#"><i className="fab fa-google-plus-g icon"/></a></li>
            </ul>
        </div>
    );
};

Footer.propTypes = {
    footerText: PropTypes.string,
    style: PropTypes.object
};

export default Footer;