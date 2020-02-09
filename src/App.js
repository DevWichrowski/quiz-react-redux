import React from 'react';
import "./App.scss"
import {BrowserRouter, Route, Router} from "react-router-dom";
import WelcomeView from "./views/WelcomeView/WelcomeView";
import QuizView from "./views/QuizView/QuizView";
import SummaryView from "./views/SummaryView/SummaryView";
import Layout from "./components/shared/Layout/Layout";

const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Layout>
                    <Route exact path="/" component={WelcomeView}/>
                    <Route path="/quiz" component={QuizView}/>
                    <Route path="/summary" component={SummaryView}/>
                </Layout>
            </BrowserRouter>
        </div>
    );
};

export default App;
