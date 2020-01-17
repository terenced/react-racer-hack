import * as React from "react";
import { hydrate } from "react-dom";

import App from "./components/App";
import createRacerStore from "./react-racer/createRacerStore";

const store = createRacerStore("#data-bundle");

hydrate(<App store={store} />, document.querySelector("#app"));
