import React, {useState, useEffect} from 'react';
import Header from '../Header';
import GameOver from '../GameOver';
import Question from '../Question';
import Answer from '../Answer';
import NextQuestion from "../NextQuestion";

const App = () => {

  const [numberQuestion, setNumberQuestion] = useState(0);
  const [birds, setBirds] = useState(null);
  const [random, setRandom] = useState(null);
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

  const handleNext = () => {
    setNumberQuestion(numberQuestion + 1);
    setRightAnswer(false);
  };

  return (
    <div className="container">
      <Header numberQuestion={numberQuestion}/>
      <GameOver/>
      <Question birds={birds} random={random} rightAnswer={rightAnswer}/>
      <Answer birds={birds} checkAnswer={checkAnswer}/>
      <button
        className={`btn ${rightAnswer ? 'btn-next' : ''}`}
        disabled={!rightAnswer}
        onClick={handleNext}
      >
        Next Level
      </button>
      <NextQuestion
        rightAnswer={rightAnswer}
        handleNext={handleNext}
      />
    </div>
  )
};

export default App;
