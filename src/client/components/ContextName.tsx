import * as React from "react";
import { useModel } from "../../react-racer/hooks/useModel";

const ContextName = () => {
  const $model = useModel();
  const events = $model.root.eventNames();
  return (
    <ul>
      {events.map(e => (
        <li key={e}>{e}</li>
      ))}
    </ul>
  );
};

export default ContextName;
