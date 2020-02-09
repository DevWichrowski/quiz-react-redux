import React from 'react';
import "./App.scss"
import {Route, Router} from "react-router-dom";
import history from "./core/history";
import "./styles/animations.scss"
import WelcomeView from "./views/WelcomeView/WelcomeView";
import QuizView from "./views/QuizView/QuizView";
import SummaryView from "./views/SummaryView/SummaryView";

const App = () => {
    return (
        <div className="app">
            <Router history={history}>
                <Route exact path="/" component={WelcomeView}/>
                <Route path="/quiz" component={QuizView}/>
                <Route path="/summary" component={SummaryView}/>
            </Router>
        </div>
    );
};

export default App;
