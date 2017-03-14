import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './containers/App';
import fetchTop50Tracks from './actions/getTop50Action';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducers,
  applyMiddleware(...middleware)
);

store.dispatch(fetchTop50Tracks());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);