import React from 'react'

const GameOver = ({ score, tryAgain }) => {
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
