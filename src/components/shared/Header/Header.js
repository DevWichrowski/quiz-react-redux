import React from 'react';
import "./Header.scss";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


const Header = ({headerText, homeNavigation, className}) => {
    return (
        <div className={`${className ?? 'header'}`}>
            {homeNavigation ? <Link to={"/"}>
                <h2>{headerText ?? "React Quiz"}</h2>
            </Link> : <h2>{headerText ?? "React Quiz"}</h2>}
        </div>
    );
};

Header.propTypes = {
    headerText: PropTypes.string,
    homeNavigation: PropTypes.bool,
    className: PropTypes.string,
};

export default Header;
