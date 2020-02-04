import * as React from "react";
import Provider from "../../react-racer/components/Provider";
import DogList from "./DogList";
import CatList from "./CatList";
import ShowImagesButton from "./ShowImagesButton";


interface AppProps {
  store?: any;
}

const App = ({ store }: AppProps) => {
  const [showImages, setShowImages] = React.useState(true);

  const toggleImages = React.useCallback(
    () => {
      setShowImages(!showImages);
    },
    [showImages, setShowImages],
  )

  return (
    <Provider value={store}>
      <div className="container">
        <h3 style={{ paddingLeft: 5 }}>Dogs and Cats</h3>
        <ShowImagesButton isShowing={showImages} onClick={toggleImages} />
        <div className="row flex-spaces">
          <div className="sm-6 col">
            <DogList showImages={showImages}/>
          </div>
          <div className="sm-6 col">
            <CatList showImages={showImages}/>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
