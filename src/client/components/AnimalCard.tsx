import * as React from "react";
import * as emoji from "node-emoji";
import useScope from "../../react-racer/hooks/useScope";

export type AnimalType = "cat" | "dog";
export interface Props {
  id: string;
  name: string;
  bio: string;
  imageUrl?: string;
  type: AnimalType;
  showImages?: boolean;
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

const AnimalCard = ({ id, name, type, imageUrl, showImages }: Props) => {
  const [_, $scoped] = useScope('_page.selected');
  const onClick = React.useCallback(() => {
    if ($scoped) {
      // @ts-ignore
      $scoped.set({id, type})
    }
  }, [$scoped])
  return (
    <div style={{ padding: 5 }} onClick={onClick}>
      <Title name={name} type={type} />
      {showImages && (
        <img
          src={imageUrl || "https://www.placehold.it/75x75"}
          alt={name}
          width={75}
          height={75}
        />
      )}
    </div>
  );
};

export default AnimalCard;
