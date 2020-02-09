import {testAction} from "../../core/helpers/tests/test-action";
import {
    ADD_POINTS,
    addPoints,
    NEXT_QUESTION,
    nextQuestion,
    RESET_QUIZ,
    resetQuiz,
    START_QUIZ,
    startQuiz
} from "./quiz.actions";


describe('Quiz actins', () => {
    testAction('Start quiz', startQuiz, START_QUIZ);
    testAction('Add Points', addPoints, ADD_POINTS);
    testAction('Next question', nextQuestion, NEXT_QUESTION);
    testAction('Reset quiz', resetQuiz, RESET_QUIZ);
});
