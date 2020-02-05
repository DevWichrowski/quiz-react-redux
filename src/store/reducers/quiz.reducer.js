import * as QuizActions from "../actions/quiz.actions";

const initialState = {
    score: 0,
    steps: 0,
};

export const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case QuizActions.START_QUIZ: {
            return state;
        }
        default: {
            return state;
        }
    }
};