export const START_QUIZ = 'START_QUIZ';
export const ADD_POINTS = 'ADD_POINTS';
export const NEXT_QUESTION = 'NEXT_QUESTION';
export const RESET_QUIZ = "RESET_QUIZ";


export const startQuiz = () => ({
    type: START_QUIZ,
});

export const addPoints = () => ({
    type: ADD_POINTS,
});

export const nextQuestion = () => ({
    type: NEXT_QUESTION
});

export const resetQuiz = () => ({
    type: RESET_QUIZ,
});