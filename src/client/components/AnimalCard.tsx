import * as React from "react";
import * as emoji from "node-emoji";

export type AnimalType = "cat" | "dog";
export interface Props {
  id: string;
  name: string;
  bio: string;
  imageUrl?: string;
  type: AnimalType;
}

interface IconProps {
  type?: AnimalType;
}

const Icon = ({ type }: IconProps) => {
  if (type) {
    return <React.Fragment>{emoji.get(type)}</React.Fragment>;
  }
  return null;
};

interface TitleProps extends IconProps {
  name: string;
}

const Title = ({ name, type }: TitleProps) => {
  return (
    <React.Fragment>
      <Icon type={type} /> {name}
    </React.Fragment>
  );
};

const AnimalCard = ({ name, type, imageUrl }: Props) => {
  return (
    <div style={{ padding: 5 }}>
      <Title name={name} type={type} />
      <img
        src={imageUrl || "https://www.placehold.it/200x200"}
        alt={name}
        width={200}
        height={200}
      />
    </div>
  );
};

export default AnimalCard;
