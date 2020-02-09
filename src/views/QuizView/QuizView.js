import React from 'react';
import Layout from "../../components/shared/Layout/Layout";
import Quiz from "../../components/Quiz/Quiz";

const QuizView = () => {
    return (
        <div>
            <Layout>
                <Quiz/>
            </Layout>
        </div>
    );
};

export default QuizView;