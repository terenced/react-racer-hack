import * as React from "react";

import { fetch } from "../../react-racer/utils";
import { useModel } from "../../react-racer/hooks/useModel";

import AnimalList from "./AnimalList";
import { Props as AnimalProps } from "./AnimalCard";
import AddButton from "./AddButton";

const CatList = () => {
  const $model = useModel();
  const [cats, setCats] = React.useState<AnimalProps[]>([]);

  const query = $model.query("cats", {});
  React.useEffect(() => {
    async function fetchCat() {
      const $cat = await fetch(query);
      $model.subscribe(query);
      // @ts-ignore
      const cat = await $cat.get();
      setCats(cat);
    }
    fetchCat();
    return () => $model.subscribe(query);
  }, [$model, query]);

  return (
    <div className="paper">
      <AddButton text="Cat" />
      <AnimalList animals={cats} type="cat" />
    </div>
  );
};

export default CatList;
