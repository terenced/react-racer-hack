import * as React from "react";
import DogList from "./DogList";
import CatList from "./CatList";
import ShowImagesButton from "./ShowImagesButton";
import AnimalDetailsModal from "./AnimalDetailsModal";

import useScope from "../../react-racer/hooks/useScope";

export default function MainPage() {
  const [showImages, setShowImages] = React.useState(true);

  const toggleImages = React.useCallback(
    () => {
      setShowImages(!showImages);
    },
    [showImages, setShowImages],
  )
  const [selected, $selected] = useScope('_page.selected');

  const onClose = React.useCallback(() => {
    if ($selected) {
      $selected.set(null);
    }
  }, [$selected]);
  return (
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
        {selected && <AnimalDetailsModal {...selected} onClose={onClose} />}
      </div>
  )
}
