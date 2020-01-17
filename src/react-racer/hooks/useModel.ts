import { useContext } from "react";
import ReactRacerContext from "../components/Context";
import { useRacerContext as useDefaultRacerContext } from "./useRacerContext";

/**
 * Hook factory, which creates a `useModel` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactRacerContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useModel` hook bound to the specified context.
 */
export function createModelHook(context = ReactRacerContext) {
  const useRacerContext =
    context === ReactRacerContext
      ? useDefaultRacerContext
      : () => useContext(context);
  return function useModel() {
    const { $model } = useRacerContext();
    return $model;
  };
}

/**
 * A hook to access the Racer Model.
 *
 * @returns {any} the Racer Model
 *
 * @example
 *
 * import React from 'react'
 * import { useModel } from 'react-Racer'
 *
 * export const ExampleComponent = () => {
 *   const Model = useModel()
 *   return <div>{Model.getState()}</div>
 * }
 */
export const useModel = createModelHook();
