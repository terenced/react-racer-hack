import * as React from "react";
import useQuery from "../../react-racer/hooks/useQuery";
import { useModel } from "../../react-racer/hooks/useModel";

import AnimalList from "./AnimalList";
import AddButton from "./AddButton";
import { createCat } from "../../random/generate";

const CatList = () => {
  const [cats, $cats] = useQuery("cats", {});
  const $model = useModel();

  const onClick = React.useCallback(async () => {
    if ($cats) {
      const cat = await createCat();
      //@ts-ignore
      $model.add('cats', cat);
    }
  }, [$cats]);

  return (
    <div className="paper">
      <AddButton text="Cat" onClick={onClick} />
      <AnimalList animals={cats} type="cat" />
    </div>
  );
};

export default CatList;
