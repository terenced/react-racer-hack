import * as React from "react";

import useQuery from "../../react-racer/hooks/useQuery";
import { useModel } from "../../react-racer/hooks/useModel";

import AnimalList from "./AnimalList";
import AddButton from "./AddButton";
import { createDog } from "../../random/generate";

const DogList = ({ showImages } ) => {
  const [dogs, $dogs] = useQuery("dogs", {});
  const $model = useModel();

  const onClick = React.useCallback(async () => {
      const dog = await createDog();
      //@ts-ignore
      $model.add('dogs', dog);
  }, [$model]);

  return (
    <div className="paper">
      <AddButton text="Dog" onClick={onClick}/>
      <AnimalList animals={dogs} type="dog" showImages={showImages}/>
    </div>
  );
};

export default DogList;
