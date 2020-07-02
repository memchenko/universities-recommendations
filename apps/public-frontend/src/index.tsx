import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faAngleUp,
  faAngleDown,
  faPlus,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

import App from './App';
import store from './store';
import * as serviceWorker from './serviceWorker';

import './index.scss';

library.add(
  faSearch,
  faAngleUp,
  faAngleDown,
  faPlus,
  faStar,
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <AppContainer>
        <App />
      </AppContainer>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
