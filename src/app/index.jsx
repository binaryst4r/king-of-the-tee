/* eslint camelcase: 0 */
import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from 'stores/configure-store';
import routes from './routes';

injectTapEventPlugin();

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

require('../scss/app.scss');

render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
      {routes()}
    </Router>
  </Provider>,
  document.getElementById('main')
);
