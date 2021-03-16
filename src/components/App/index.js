import React, { useState, useEffect } from 'react';
import Header from '../Header';
import GameOver from '../GameOver';
import Question from '../Question';
import Answer from '../Answer';

const App = () => {

  const [numberQuestion, setNumberQuestion] = useState(0);
  const [birds, setBirds] = useState(null);
  const [random,  setRandom] = useState(null);

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

  return (
    <div className="container">
      <Header/>
      <GameOver/>
      <Question />
      <Answer birds={birds} />
      <button className="btn">Next Level</button>
    </div>
  )
};

export default App;
