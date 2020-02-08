import React from 'react';
import './App.scss';
import Quiz from "./components/Quiz/Quiz";
import {Route, Router} from "react-router-dom";
import history from "./core/history";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";
import Footer from "./components/shared/Footer/Footer";

const App = () => {
    return (
        <div>
            <div className="main-header">
                React Quiz
            </div>
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
