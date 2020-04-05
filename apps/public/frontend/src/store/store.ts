import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

import { WindowWithReduxDevTools } from './types';

const windowWithReduxDevTools = window as WindowWithReduxDevTools;

const composeEnhancers = (
    typeof window === 'object'
    && windowWithReduxDevTools.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  )
    ? windowWithReduxDevTools.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    : compose;
const epicMiddleware = createEpicMiddleware();

export const store = createStore(
  () => ({}),
  composeEnhancers(
    applyMiddleware(
      epicMiddleware,
    )
  )
);

epicMiddleware.run(combineEpics());
