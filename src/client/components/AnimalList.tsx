import * as React from "react";

import AnimalCard from "./AnimalCard";
import { Props as AnimalProps, AnimalType } from "./AnimalCard";

interface Props {
  animals: AnimalProps[];
  type: AnimalType;
  showImages?: boolean;
}

export default function AnimalList({ animals, type, showImages }: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignContent: "flex-start"
      }}
    >
      {animals &&
        animals.map(animal => (
          <AnimalCard
            key={animal.id}
            {...animal}
            type={type}
            showImages={showImages}
          />
        ))}
    </div>
  );
}
