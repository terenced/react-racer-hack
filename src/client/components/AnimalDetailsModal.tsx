import * as React from "react";
import useScope from "../../react-racer/hooks/useScope";

import { Props as AnimalProps } from "./AnimalCard";

interface CallbackProps {
  onClose: () => void;
}

type Props = Pick<AnimalProps, "id" | "type"> & CallbackProps;

export default function AnimalDetailsModal({ id, type, onClose }: Props) {
  const [animal, _] = useScope<AnimalProps>(`${type}s.${id}`);
  if (!animal) {
    return null;
  }

  return (
    <React.Fragment>
      <input className="modal-state" id="modal-animal" type="checkbox" checked />
      <div className="modal">
        <label className="modal-bg" htmlFor="modal-animal"></label>
        <div className="modal-body">
          <label className="btn-close" onClick={onClose} htmlFor="modal-animal">
            X
          </label>
          <h4 className="modal-title">{animal.name}</h4>
          <h5 className="modal-subtitle">{animal.type}</h5>
          <p className="modal-text">{animal.bio}</p>
          <img src={animal.imageUrl} alt="Image of animal"></img>
          <button className="btn btn-small" onClick={onClose}>Nice!</button>
        </div>
      </div>
    </React.Fragment>
  );
}
