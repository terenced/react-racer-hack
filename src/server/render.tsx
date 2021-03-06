import * as React from 'react';
import { renderToString } from 'react-dom/server';

import App from "../client/components/App";
import createRacerStore from "../react-racer/createRacerStore";

export default (racerBundle) => {
  // const content = renderToString(
  //   <App store={createRacerStore(racerBundle)} />
  // );

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <link rel="stylesheet" href="https://unpkg.com/papercss@1.6.1/dist/paper.min.css">
      <title>React-Racer Demo</title>
    </head>
    <body>
      <div id="app"></div>
      <script id="racer-data-bundle" type="application/json">${racerBundle}</script>
      <script src="/dist/client.js"></script>
    </body>
  </html>
  `;
};
