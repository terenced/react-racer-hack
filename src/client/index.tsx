import * as React from 'react';
import { hydrate } from 'react-dom';
import * as Racer from "racer";

import App from "./components/App";

const racerDataBundle = document.querySelector('#data-bundle');

// Why is Racer.Model.unbundle is undefined? O_o
const racerModel = Racer.Model.unbundle(JSON.parse(racerDataBundle.innerHTML));

console.log("racerModel", racerModel);
hydrate(<App racer={racerModel} />, document.querySelector('#app'));
