import React from 'react'

const GameOver = () => {
  return (
    <div className="jumbotron game-over">
      <h1 className="display-3 text-center">Поздравляем!</h1>
      <p className="lead text-center">Вы прошли викторину и набрали 0 из 30 возможных баллов</p>
      <hr className="my-4" />
      <button className="btn btn-next btn-game-over">Попробовать еще раз!</button>
    </div>
  )
}

export default GameOver
