import React from 'react';
import "./Layout.scss"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({children}) => {
    return (
        <div className="layout">
            <Header className="layout__main-header" navigation={"/"}/>>
            <div className="layout__content">
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;