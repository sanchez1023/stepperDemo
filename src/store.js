import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducer from './reducer';

import { createBrowserHistory } from 'history';


export const browserHistory = createBrowserHistory();

const store = createStore(
  reducer,
  applyMiddleware(logger)
)

export default store;