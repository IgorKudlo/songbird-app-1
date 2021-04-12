const defaultState = {
    numberQuestion: 0,
}

export const numberQuestionReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_NUMBER_QUESTION':
            return {...state, numberQuestion: state.numberQuestion + 1}
        case 'RESET_NUMBER_QUESTION':
            return {...state, numberQuestion: 0}
        default:
            return state;
    }
}