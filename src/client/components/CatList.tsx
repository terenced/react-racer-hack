import * as React from "react";
import { fetch } from "../../react-racer/utils";
import { useModel } from "../../react-racer/hooks/useModel";
import useQuery from "../../react-racer/hooks/useQuery";

import AnimalList from "./AnimalList";
import AddButton from "./AddButton";
import { createCat } from "../../random/generate";

const CatList = () => {
  const [cats, $cats] = useQuery("cats", {});

  const onClick = React.useCallback(async () => {
    if ($cats) {
      const cat = await createCat();
      //@ts-ignore
      $cats.push(cat);
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
