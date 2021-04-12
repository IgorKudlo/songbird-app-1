import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

const NextQuestion = ({ birds }) => {

    const dispatch = useDispatch();
    const numberQuestion = useSelector(state => state.numberQuestion);
    const isRightAnswer = useSelector(state => state.isRightAnswer);

    const handleNext = () => {
        if (numberQuestion < birds.length-1) {
            dispatch({type: 'SET_NUMBER_QUESTION'});
            dispatch({type: 'SET_RIGHT_ANSWER', payload: false});
        } else {
            dispatch({type: 'SET_FINISH', payload: true});
        }
    }

    return (
        <button
            className={`btn ${isRightAnswer ? 'btn-next' : ''}`}
            disabled={!isRightAnswer}
            onClick={handleNext}
        >
            Next Level
        </button>
    )
}

export default NextQuestion;