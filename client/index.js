import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '../src/index';
import App from '../src/containers/App';
import rootReducer from '../src/reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const middleware = [thunk, createLogger()];

const store = createStore(rootReducer,
  preloadedState,
  applyMiddleware(...middleware)
);

const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);