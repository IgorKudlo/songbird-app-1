import React from 'react'
import Header from '../Header'
import GameOver from '../GameOver'
import Question from '../Question'
import Answer from '../Answer'

const App = () => {
  return (
    <div className="container">
      <Header/>
      <GameOver/>
      <Question />
      <Answer />
      <button className="btn">Next Level</button>
    </div>
  )
}

export default App
