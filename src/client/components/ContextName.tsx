import * as React from "react";
import ReactRacerContext from "../../react-racer/Context";

const ContextName = () => {
  const context = React.useContext(ReactRacerContext);
  const events = context.$model.root.eventNames();
  return (
    <ul>
      {events.map(e => (
        <li key={e}>{e}</li>
      ))}
    </ul>
  );
};

export default ContextName;
