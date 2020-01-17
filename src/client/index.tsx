import * as React from 'react';
import { hydrate } from 'react-dom';
import * as Racer from "racer";

import App from "./components/App";

const racerDataBundle = document.querySelector('#data-bundle');

// Why is Racer.Model.unbundle is undefined? O_o
const model = new Racer.Model();
model.unbundle(JSON.parse(racerDataBundle.innerHTML));

console.log("racerModel", model);
hydrate(<App racer={model} />, document.querySelector('#app'));
