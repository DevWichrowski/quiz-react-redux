import * as QuizActions from "../actions/quiz.actions";

export const initialState = {
    score: 0,
    questionNumber: 0,
};

export const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case QuizActions.START_QUIZ: {
            return {...state, questionNumber: 1}
        }
        case QuizActions.ADD_POINTS: {
            return {...state, score: state.score + 5}
        }
        case QuizActions.RESET_QUIZ: {
            return {...state, score: 0, questionNumber: 1}
        }
        case QuizActions.NEXT_QUESTION: {
            return {...state, questionNumber: state.questionNumber + 1}
        }
        default: {
            return state;
        }
    }
};