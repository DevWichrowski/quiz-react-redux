import React from 'react';
import './App.scss';
import Quiz from "./components/Quiz/Quiz";
import {Route, Router} from "react-router-dom";
import history from "./core/history";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";
import Footer from "./components/shared/Footer/Footer";
import Header from "./components/shared/Header/Header";

const App = () => {
    return (
        <div>
            <Header headerText={'React Quiz'} className="main-header"/>
            <div className="app">
                <Router history={history}>
                    <Route exact path="/" component={WelcomeScreen}/>
                    <Route path="/quiz" component={Quiz}/>
                </Router>
            </div>
        <Footer/>
        </div>

    );
};

export default App;
