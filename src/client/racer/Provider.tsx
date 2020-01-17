import * as React from 'react';
import * as racer from "racer";

import ReactRacerContext from "./Context";

interface Params {
  value: any,
  context?: any,
  children?: React.ReactElement;
}

export default function Provider({ value, context, children }: Params) {
  const Context = context || ReactRacerContext;
  return <Context.Provider value={value}>{children}</Context.Provider>
}
