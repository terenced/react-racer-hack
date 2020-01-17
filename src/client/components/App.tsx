import * as React from "react";
import Provider from "../racer/Provider";
import ContextName from "./ContextName";

const App = (racer) => {
  return (
    <Provider value={racer}>
      <div>
        Hello Dude!
        <ContextName />
      </div>
    </Provider>
  )
}

export default App
