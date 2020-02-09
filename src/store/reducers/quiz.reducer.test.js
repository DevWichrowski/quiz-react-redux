import {initialState, quizReducer} from "./quiz.reducer";
import {addPoints, nextQuestion, resetQuiz, startQuiz} from "../actions/quiz.actions";

describe('Quiz reducer', () => {
    it('should return initial state', () => {
        const newState = quizReducer(initialState, {});

        expect(newState).toEqual(initialState);
    });

    it('should start quiz', () => {
        const action = startQuiz();

        const newState = quizReducer(initialState, action);

        expect(newState.questionNumber).toBe(1);
    });

    it('add points to the score', () => {
        const action = addPoints();

        const newState = quizReducer(initialState, action);

        expect(newState.score).toBe(5);
    });

    it('should reset quiz', () => {
        const action = resetQuiz();

        const newState = quizReducer({score: 10, questionNumber: 2}, action);

        expect(newState).toEqual({score: 0, questionNumber: 1});
    });

    it('should increment questionNumber - nextQuestion', () => {
        const action = nextQuestion();

        const newState = quizReducer({questionNumber: 2}, action);

        expect(newState.questionNumber).toBe(3);
    });
});