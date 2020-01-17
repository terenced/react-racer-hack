import * as React from 'react';
import { renderToString } from 'react-dom/server';

import App from "../client/components/App";

export default (racerData) => {
  const content = renderToString(<App racer={racerData} />);

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Title</title>
    </head>
    <body>
      <div id="app">${content}</div>
      <script id="data-bundle" type="application/json">${racerData}</script>
      <script src="/dist/client.js"></script>
    </body>
  </html>
  `;
};
