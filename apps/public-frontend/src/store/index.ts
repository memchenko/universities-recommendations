import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { identity } from 'ramda'

import { epics as departmentsEpics } from '../entities/departments';
import { epics as facultiesEpics } from '../entities/faculties';
import { epics as meEpics } from '../entities/me';
import { epics as networkEpics } from '../entities/network';
import { epics as searchEpics } from '../entities/search';
import { epics as specialtiesEpics } from '../entities/specialties';
import { epics as universitiesEpics } from '../entities/universities';
import { epics as usersEpics } from '../entities/users';
import rootReducer from './rootReducer';
import { WindowWithReduxDevTools } from './types';

const windowWithReduxDevTools = window as WindowWithReduxDevTools;
const devTools = windowWithReduxDevTools.__REDUX_DEVTOOLS_EXTENSION__
  ? windowWithReduxDevTools.__REDUX_DEVTOOLS_EXTENSION__()
  : identity;

const epicMiddleware = createEpicMiddleware();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(epicMiddleware),
    devTools,
  ),
);

epicMiddleware.run(combineEpics<any>(
  ...departmentsEpics,
  ...facultiesEpics,
  ...meEpics,
  ...networkEpics,
  ...searchEpics,
  ...specialtiesEpics,
  ...universitiesEpics,
  ...usersEpics,
));

export default store;
