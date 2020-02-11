import * as React from "react";
import Provider from "../../react-racer/components/Provider";
import MainPage from "./MainPage";



const App = ({ store }) => {
  return (
    <Provider value={store}>
      <MainPage />
    </Provider>
  );
};

export default App;
