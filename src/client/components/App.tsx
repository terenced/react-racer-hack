import * as React from "react";
import Provider from "../../react-racer/components/Provider";
import ContextName from "./ContextName";

const App = ({ store }) => {
  return (
    <Provider value={store}>
      <div>
        Hello Dude!
        <ContextName />
      </div>
    </Provider>
  );
};

export default App;
