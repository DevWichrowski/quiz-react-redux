import React from 'react';
import {useDocumentTitle} from "../../core/helpers/hooks";
import WelcomeScreen from "../../components/WelcomeScreen/WelcomeScreen";


const WelcomeView = () => {
    useDocumentTitle("Welcome in React Quiz");
    return (
            <WelcomeScreen/>
    );
};

export default WelcomeView;
