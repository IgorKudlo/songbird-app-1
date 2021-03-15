import React, { useEffect } from 'react';
import Header from '../Header';
import GameOver from '../GameOver';
import Question from '../Question';
import Answer from '../Answer';

const App = () => {

  useEffect(() => {
    fetch('https://birds-app-779ec.firebaseio.com/birds.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data)
      });
  });

  console.log('update');

  return (
    <div className="container">
      <Header/>
      <GameOver/>
      <Question />
      <Answer />
      <button className="btn">Next Level</button>
    </div>
  )
};

export default App;
