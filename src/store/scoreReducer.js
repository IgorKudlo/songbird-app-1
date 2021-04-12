const defaultState = {
    score: 0,
}

export const scoreReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_SCORE':
            return {...state, score: action.payload}
        default:
            return state;
    }
}