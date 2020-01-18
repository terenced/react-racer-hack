import * as React from "react";
import Provider from "../../react-racer/components/Provider";
import SampleValues from "./SampleValues";

const App = ({ store }) => {
  return (
    <Provider value={store}>
      <div>
        Hello Dude!
        <SampleValues />
      </div>
    </Provider>
  );
};

export default App;
