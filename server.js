import path from 'path';
import express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';

import { createStore, Provider } from './src/store';
import reducers from './src/reducers';

import App from './src/components/App';

import { END, ROOT_CLOSE, START } from './src/template';

const port = process.env.PORT || 3000;
const publicPath = path.resolve(__dirname, 'public');

express()
  .use(express.static(publicPath))
  .get('/*', (request, response) => {
    const context = {};
    const store = createStore(reducers);

    const markup = renderToString(
      <StaticRouter context={context} location={request.url}>
        <Provider store={store}>
          <App />
        </Provider>
      </StaticRouter>
    );

    const status = context.status || 200;

    response.writeHead(status, { 'Content-Type': 'text/html; charset=utf-8' });
    response.write(START);
    response.write(markup);
    response.write(ROOT_CLOSE);
    response.write(
      `<script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(store).replace(/</g, '\\u003c')}
      </script>`,
    );
    response.write(END);
    response.end();
  })
  // eslint-disable-next-line no-console
  .listen(port, () => console.log(`Listening on port ${port}`));
