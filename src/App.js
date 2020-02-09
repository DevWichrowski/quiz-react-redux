import React from 'react';
import {Route, Router} from "react-router-dom";
import history from "./core/history";
import "./styles/animations.scss"
import WelcomeView from "./views/WelcomeView/WelcomeView";
import QuizView from "./views/QuizView/QuizView";

const App = () => {
    return (
        <div className="app">
            <Router history={history}>
                <Route exact path="/" component={WelcomeView}/>
                <Route path="/quiz" component={QuizView}/>
            </Router>
        </div>
    );
};

export default App;
