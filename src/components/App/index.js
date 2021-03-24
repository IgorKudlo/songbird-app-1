import React, { useState, useEffect } from 'react';
import Header from '../Header';
import GameOver from '../GameOver';
import Question from '../Question';
import Answer from '../Answer';

const App = () => {

  const [numberQuestion, setNumberQuestion] = useState(0);
  const [birds, setBirds] = useState(null);
  const [random,  setRandom] = useState(null);
  const [rightAnswer, setRightAnswer] = useState(false);

  useEffect(() => {
    fetch('https://birds-app-779ec.firebaseio.com/birds.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRandom(Math.floor(Math.random() * (data.length - 1)));
        setBirds(data[numberQuestion]);
      });
  }, [numberQuestion]);

  const checkAnswer = (id) => {
      if (birds[random].id === id) {
          setRightAnswer(true)
      }
  };

  return (
    <div className="container">
      <Header/>
      <GameOver/>
      <Question birds={birds} random={random} rightAnswer={rightAnswer} />
      <Answer birds={birds} checkAnswer={checkAnswer} />
      <button className="btn">Next Level</button>
    </div>
  )
};

export default App;
