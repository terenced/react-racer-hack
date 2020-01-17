import { createContext } from 'react'

export const ReactRacerContext = createContext(null)

if (process.env.NODE_ENV !== 'production') {
  ReactRacerContext.displayName = 'ReactRacer'
}
export default ReactRacerContext
