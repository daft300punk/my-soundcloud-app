import path from 'path';
import Express from 'express';
import qs from 'qs';
import cors from 'cors';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.prod.config';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import { configureStore } from '../src/index';
import App from '../src/containers/App';

import getTop50 from '../src/api/api-v2';

const app = new Express();
const port = process.env.PORT || 3000;

const compiler = webpack(webpackConfig);


app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler));
app.use(cors());

app.get('/tracks', (req, res) => {
  getTop50()
  .then(result => {
    res.send(result);
  });
});

app.use(handleRender);

function handleRender(req, res) {
  const store = configureStore();

  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const finalState = store.getState();
  res.send(renderFullPage(html, finalState));
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body style="padding: 0; margin: 0;">
        <div id="root"><div>${html}</div></div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `;
}

app.listen(port, (error) => {
  if(error) {
    console.log(error);
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});
