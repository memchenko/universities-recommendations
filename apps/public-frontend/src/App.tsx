import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Routes } from './constants/urls';
import Layout from './components/Layout';
import Root from './screens/Root';
import Search from './screens/Search';
import University from './screens/University';
import Faculty from './screens/Faculty';
import Department from './screens/Department';
import Specialty from './screens/Specialty';
import Recommendations from './screens/Recommendations';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path={ Routes.Search }>
            <Search />
          </Route>
          <Route path={ Routes.Recommendations }>
            <Recommendations />
          </Route>
          <Route path={ Routes.University }>
            <University />
          </Route>
          <Route path={ Routes.Faculty }>
            <Faculty />
          </Route>
          <Route path={ Routes.Department }>
            <Department />
          </Route>
          <Route path={ Routes.Specialty }>
            <Specialty />
          </Route>
          <Route path={ Routes.Root }>
            <Root />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
