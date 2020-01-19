import * as React from "react";

import { fetch } from "../../react-racer/utils"
import { useModel } from "../../react-racer/hooks/useModel";

interface Dog {
  id: string;
  name: string;
  breed: string;
}

const SampleValues = () => {
  const $model = useModel();
  const [dogs, setDogs] = React.useState<Dog[]>([]);

  React.useEffect(() => {
    async function fetchDogs() {
      const query = $model.query("dogs", { name: { $nin: [null, ""] } });
      const $dogs = await fetch(query);
      // @ts-ignore
      const dogs = await $dogs.get();
      setDogs(dogs);
    }
    fetchDogs();
  }, [$model.data]);

  console.log("dogs", dogs);
  return (
    <ul>
      {dogs.map((d: Dog) => (
        <li key={d.id}>{d.name}</li>
      ))}
    </ul>
  );
};

export default SampleValues;
