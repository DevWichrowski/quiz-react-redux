import React from 'react';
import './App.scss';
import Quiz from "./components/Quiz/Quiz";
import {Route, Router} from "react-router-dom";
import history from "./core/history";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";

const App = () => {
    return (
        <div className="app">
            <Router history={history}>
                <Route exact path="/" component={WelcomeScreen}/>
                <Route path="/quiz" component={Quiz}/>
            </Router>
        </div>
    );
};

export default App;
