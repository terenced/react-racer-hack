import * as React from "react";
import useQuery from "../../react-racer/hooks/useQuery";
import { useModel } from "../../react-racer/hooks/useModel";

import AnimalList from "./AnimalList";
import AddButton from "./AddButton";
import { createCat } from "../../random/generate";

const CatList = ({ showImages }) => {
  const [cats, $query] = useQuery("cats", {});
  const $model = useModel();

  const onClick = React.useCallback(async () => {
    const cat = await createCat();
    //@ts-ignore
    $model.add("cats", cat);
  }, [$query]);

  return (
    <div className="paper">
      <AddButton text="Cat" onClick={onClick} />
      <AnimalList animals={cats} type="cat" showImages={showImages} />
    </div>
  );
};

export default CatList;
