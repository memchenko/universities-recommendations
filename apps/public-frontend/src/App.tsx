import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  ROOT,
  SEARCH,
  UNIVERSITY,
  FACULTY,
  DEPARTMENT,
  SPECIALTY,
  ACCOUNT,
} from './constants/urls';
import { store } from './store/store';
import { Root } from './screens/Root';
import { Search } from './screens/Search';
import { University } from './screens/University';
import { Faculty } from './screens/Faculty';
import { Department } from './screens/Department';
import { Specialty } from './screens/Specialty';
import { Account } from './screens/Account';

function App() {
  return (
    <Provider store={ store }>
      <Router>
        <Switch>
          <Route path={ SEARCH }>
            <Search />
          </Route>
          <Route path={ UNIVERSITY }>
            <University />
          </Route>
          <Route path={ FACULTY }>
            <Faculty />
          </Route>
          <Route path={ DEPARTMENT }>
            <Department />
          </Route>
          <Route path={ SPECIALTY }>
            <Specialty />
          </Route>
          <Route path={ ACCOUNT }>
            <Account />
          </Route>
          <Route path={ ROOT }>
            <Root />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
