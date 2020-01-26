import * as React from "react";
import Provider from "../../react-racer/components/Provider";
import DogList from "./DogList";
import CatList from "./CatList";

const App = ({ store }) => {
  return (
    <Provider value={store}>
      <div>
        <h3 style={{ paddingLeft: 5 }}>Dogs and Cats</h3>
        <div className="row flex-spaces">
          <div className="sm-6 col">
            <DogList />
          </div>
          <div className="sm-6 col">
            <CatList />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
