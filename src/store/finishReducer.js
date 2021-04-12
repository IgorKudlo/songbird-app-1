const defaultState = {
    isFinish: false,
}

export const finishReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_FINISH':
            return {...state, isFinish: action.payload}
        default:
            return state;
    }
}