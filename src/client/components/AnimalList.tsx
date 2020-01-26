import * as React from "react";

import AnimalCard from "./AnimalCard";
import { Props as AnimalProps, AnimalType } from "./AnimalCard";

interface Props {
  animals: AnimalProps[];
  type: AnimalType;
}

export default function AnimalList({ animals, type }: Props) {
  return (
    <div style={{
      display: "flex", 
      flexWrap: "wrap",
      alignContent: "flex-start"
    }}>
      {animals.map(animal => (
        <AnimalCard key={animal.id} {...animal} type={type} />
      ))}
    </div>
  );
}
