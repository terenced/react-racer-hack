import { useContext } from 'react'
import ReactRacerContext from '../components/Context'

export function useRacerContext() {
  const contextValue = useContext(ReactRacerContext)

  if (process.env.NODE_ENV !== 'production' && !contextValue) {
    throw new Error(
      'could not find react-racer context value; please ensure the component is wrapped in a <Provider>'
    )
  }

  return contextValue
}
