import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from "react-redux";

import reportWebVitals from './reportWebVitals';
import App from './components/App/index';

import './styles.scss';

const defaultState = {
    numberQuestion: 0,
    isRightAnswer: false,
    isFinish: false,
    score: 0,
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_NUMBER_QUESTION':
            return {...state, numberQuestion: state.numberQuestion + 1}
        case 'SET_RIGHT_ANSWER':
            return {...state, isRightAnswer: action.payload}
        case 'SET_SCORE':
            return {...state, score: action.payload}
        case 'SET_FINISH':
            return {...state, isFinish: action.payload}
        default:
            return state;
    }
}

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
