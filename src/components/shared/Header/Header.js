import React from 'react';
import "./Header.scss";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Header = ({headerText, navigation, className}) => {
    return (
        <div className={`${className ?? 'header'}`}>
            <Link to={"/"}>
                <h2>{headerText ?? "React Quiz"}</h2>
            </Link>
        </div>
    );
};

Header.propTypes = {
    headerText: PropTypes.string,
    navigation: PropTypes.string,
    className: PropTypes.string,
};

export default Header;