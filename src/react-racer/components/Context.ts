import { createContext } from "react";

const ReactRacerContext = createContext(null);

if (process.env.NODE_ENV !== "production") {
  ReactRacerContext.displayName = "ReactRacer";
}

export default ReactRacerContext;
