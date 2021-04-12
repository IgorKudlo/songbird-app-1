import React from 'react'
import {useDispatch, useSelector} from 'react-redux';

const GameOver = () => {
  const dispatch = useDispatch();

  const score = useSelector(state => state.score);

  const tryAgain = () => {
    dispatch({type: 'SET_NUMBER_QUESTION', payload: 0})
    dispatch({type: 'SET_SCORE', payload: 0})
    dispatch({type: 'SET_FINISH', payload: false});
    dispatch({type: 'SET_RIGHT_ANSWER', payload: false});
  };

  return (
    <div className="jumbotron game-over">
      <h1 className="display-3 text-center">Поздравляем!</h1>
      <p className="lead text-center">Вы прошли викторину и набрали {score} из 30 возможных баллов</p>
      <hr className="my-4" />
      {
        score < 30 ? <button className="btn btn-next btn-game-over" onClick={tryAgain}>Попробовать еще раз!</button> : null
      }
    </div>
  )
}

export default GameOver
