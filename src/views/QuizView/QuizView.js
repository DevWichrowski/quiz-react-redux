import React from 'react';
import Layout from "../../components/shared/Layout/Layout";
import Quiz from "../../components/Quiz/Quiz";
import {useDocumentTitle} from "../../core/helpers/hooks";


const QuizView = () => {
    useDocumentTitle("React Quiz");
    return (
        <Layout>
            <Quiz/>
        </Layout>
    );
};

export default QuizView;
