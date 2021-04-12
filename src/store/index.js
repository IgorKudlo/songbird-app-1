import {combineReducers, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import {answerReducer} from './answerReducer';
import {finishReducer} from './finishReducer';
import {numberQuestionReducer} from './numberQuestionReducer';
import {scoreReducer} from './scoreReducer';

const rootReducer = combineReducers({
    answer: answerReducer,
    finish: finishReducer,
    numberQuestion: numberQuestionReducer,
    score: scoreReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());