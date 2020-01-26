import * as React from "react";

import { fetch } from "../../react-racer/utils";
import { useModel } from "../../react-racer/hooks/useModel";

import AnimalList from "./AnimalList";
import { Props as AnimalProps } from "./AnimalCard";
import AddButton from "./AddButton";

const DogList = () => {
  const $model = useModel();
  const [dogs, setDogs] = React.useState<AnimalProps[]>([]);

  console.log("$model", $model);
  const query = $model.query("dogs", {});
  React.useEffect(() => {
    async function fetchDogs() {
      const $dogs = await fetch(query);
      $model.subscribe(query);
      // @ts-ignore
      const dogs = await $dogs.get();
      setDogs(dogs);
    }
    fetchDogs();
    return () => $model.subscribe(query);
  }, [$model, query]);

  return (
    <div className="paper">
      <AddButton text="Dog" />
      <AnimalList animals={dogs} type="dog" />
    </div>
  );
};

export default DogList;
