import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

import {
  epics as departmentsEpics,
  reducers as departments,
} from '../entities/departments';
import {
  epics as facultiesEpics,
  reducers as faculties,
} from '../entities/faculties';
import {
  epics as favoritesEpics,
  reducers as favorites,
} from '../entities/favorites';
import {
  epics as meEpics,
  reducers as me,
} from '../entities/me';
import {
  epics as networkEpics,
  reducers as network,
} from '../entities/network';
import {
  epics as searchEpics,
  reducers as search,
} from '../entities/search';
import {
  epics as specialtiesEpics,
  reducers as specialties,
} from '../entities/specialties';
import {
  epics as universitiesEpics,
  reducers as universities,
} from '../entities/universities';
import {
  epics as usersEpics,
  reducers as users,
} from '../entities/users';
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
  combineReducers({
    departments,
    faculties,
    favorites,
    me,
    network,
    search,
    specialties,
    universities,
    users,
  }),
  composeEnhancers(
    applyMiddleware(
      epicMiddleware,
    )
  )
);

epicMiddleware.run(combineEpics<any>(
  ...departmentsEpics,
  ...facultiesEpics,
  ...favoritesEpics,
  ...meEpics,
  ...networkEpics,
  ...searchEpics,
  ...specialtiesEpics,
  ...universitiesEpics,
  ...usersEpics,
));
