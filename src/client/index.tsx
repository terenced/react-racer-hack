import * as React from "react";
import { hydrate } from "react-dom";

import App from "./components/App";

import createRacerStore from "../react-racer/createRacerStore";
import extractBundleFromDOM from "../react-racer/extractBundleFromDOM";

const store = createRacerStore(extractBundleFromDOM("#racer-data-bundle"));

hydrate(<App store={store} />, document.querySelector("#app"));
