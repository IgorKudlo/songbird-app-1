const defaultState = {
    isRightAnswer: false,
}

export const answerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_RIGHT_ANSWER':
            return {...state, isRightAnswer: action.payload}
        default:
            return state;
    }
}