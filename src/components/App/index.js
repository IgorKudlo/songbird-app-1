import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import Header from '../Header';
import GameOver from '../GameOver';
import Question from '../Question';
import Answer from '../Answer';
import NextQuestion from '../NextQuestion';

const App = () => {

  const numberQuestion = useSelector(state => state.numberQuestion)
  const isFinish = useSelector(state => state.isFinish);

  const [birds, setBirds] = useState(null);
  const [random, setRandom] = useState(null);

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
      <Header numberQuestion={numberQuestion} />
      {
        !isFinish ?
          <>
            <Question birds={birds} random={random} />
            <Answer birds={birds} random={random} />
            <NextQuestion birds={birds} />
          </>
          : <GameOver />
      }
    </div>
  )
};

export default App;
