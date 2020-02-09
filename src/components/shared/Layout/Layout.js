import React from 'react';
import "./Layout.scss"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";


const Layout = ({children}) => {
    return (
        <div className="layout">
            <Header className="layout__main-header" homeNavigation={true}/>
            <div className="layout__content">
                {children}
            </div>
            <Footer/>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.any.isRequired
};

export default Layout;
