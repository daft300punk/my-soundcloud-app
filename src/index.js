import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

import fetchTop50Tracks from './actions/getTop50Action';

const middleware = [thunk, createLogger()];

export const configureStore = () => {
  const store = createStore(
    reducers,
    applyMiddleware(...middleware)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/index', () => {
      const nextRootReducer = require('./reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  store.dispatch(fetchTop50Tracks());

  return store;
};
