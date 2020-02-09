import React from 'react';
import {useDocumentTitle} from "../../core/hooks";
import Layout from "../../components/shared/Layout/Layout";
import WelcomeScreen from "../../components/WelcomeScreen/WelcomeScreen";

const WelcomeView = () => {
    useDocumentTitle("Welcome in React Quiz");
    return (
        <Layout>
            <WelcomeScreen/>
        </Layout>
    );
};

export default WelcomeView;