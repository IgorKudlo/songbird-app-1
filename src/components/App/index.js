import React, {useState, useEffect} from 'react';
import Header from '../Header';
import GameOver from '../GameOver';
import Question from '../Question';
import Answer from '../Answer';

const App = () => {

  const [numberQuestion, setNumberQuestion] = useState(0);
  const [birds, setBirds] = useState(null);
  const [random, setRandom] = useState(null);
  const [rightAnswer, setRightAnswer] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const [score, setScore] = useState(0);

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

  const checkAnswer = (id, points) => {
    if (birds[random].id === id) {
      setScore(score + points);
      setRightAnswer(true)
    }
  };

  const handleNext = () => {
    if (numberQuestion < birds.length-1) {
      setNumberQuestion(numberQuestion + 1);
      setRightAnswer(false);
    } else {
      setIsFinish(true);
    }
  };

  const tryAgain = () => {
      setNumberQuestion(0);
      setScore(0);
      setIsFinish(false);
      setRightAnswer(false);
  };

  return (
    <div className="container">
      <Header numberQuestion={numberQuestion} score={score}/>
      {
        !isFinish ?
          <>
            <Question birds={birds} random={random} rightAnswer={rightAnswer}/>
            <Answer birds={birds} checkAnswer={checkAnswer} rightAnswer={rightAnswer}/>
            <button
              className={`btn ${rightAnswer ? 'btn-next' : ''}`}
              disabled={!rightAnswer}
              onClick={handleNext}
            >
              Next Level
            </button>
          </>
          : <GameOver score={score} tryAgain={tryAgain} />
      }
    </div>
  )
};

export default App;
