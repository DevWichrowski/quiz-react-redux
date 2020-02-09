import React from 'react';
import Quiz from "../../components/Quiz/Quiz";
import {useDocumentTitle} from "../../core/helpers/hooks";


const QuizView = () => {
    useDocumentTitle("React Quiz");
    return (
            <Quiz/>
    );
};

export default QuizView;
