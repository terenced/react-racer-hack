import * as React from 'react';
import { renderToString } from 'react-dom/server';

import App from "../client/components/App";
import createRacerStore from "../react-racer/createRacerStore";

export default (racerBundle) => {
  const content = renderToString(
    <App store={createRacerStore(racerBundle)} />
  );

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Title</title>
    </head>
    <body>
      <div id="app">${content}</div>
      <script id="racer-data-bundle" type="application/json">${racerBundle}</script>
      <script src="/dist/client.js"></script>
    </body>
  </html>
  `;
};
