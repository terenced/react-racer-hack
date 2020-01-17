import * as React from "react";
import RacerContext from "../react-racer/Context";

const ContextName = () => {
  const context = React.useContext(RacerContext);
  console.log("context", context);
  return <div>{context?.displayName}</div>;
};

export default ContextName;
